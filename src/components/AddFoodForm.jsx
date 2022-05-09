import { useState } from "react"
import { Form, Input, Button, } from 'antd';


export default function AddFoodForm(props){
    const[newFood,setNewfood]=useState({
        name:'',
        image:'',
        calories:0,
        servings:0,
    })

    function createFood(event){ //pillo los valore del imput
    const inputName = event.target.name;
    let value=event.target.value;
    console.log('input:',inputName)
    setNewfood({...newFood, [inputName]: value});
    }
    function submit(event){ //le paso los valores al prop que tenemos en la funcion de app
    event.preventDefault();
    props.addFood(newFood)
    setNewfood({
        name:'',
        image:'',
        calories:0,
        servings:0
    })
    }

    return(
        <div className="form">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off">
            <Form.Item
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input the name food!' }]}>
            <Input value={newFood.name} onChange={createFood} name='name' />
            </Form.Item>

            <Form.Item
                label="image"
                name="image"
                rules={[{ required: true, message: 'Please input the image url' }]}>
            <Input value={newFood.image} onChange={createFood} name='image'/>
            </Form.Item>

            <Form.Item
                label="calories"
                name="calories"
                rules={[{ required: true, message: 'Please input the nº of calories!' }]}>
            <Input value={newFood.calories} onChange={createFood} name='calories'/>
            </Form.Item>

            <Form.Item
                label="servings"
                name="servings"
                rules={[{ required: true, message: 'Please input the nºservings!' }]}>
            <Input value={newFood.servings} onChange={createFood} name='servings'/>
            </Form.Item>
            <Button type="primary" htmlType="submit" onClick={submit}>
                Add food
            </Button>
            </Form>
        </div>
        
    )
}


    