import { Card, Col,  Button } from "antd";
export default function FoodBox(props){
    
   

    return(
        <div>
            <Col>
            <Card
                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={props.food.image} alt='foto' height={60} />
                <p>Calories: {props.food.calories}</p>
                <p>Servings: {props.food.servings}</p>
                <p>
                <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={()=>props.deleteFood(props.food)}> Delete </Button>
            </Card>
            </Col>
        </div>
    )
}