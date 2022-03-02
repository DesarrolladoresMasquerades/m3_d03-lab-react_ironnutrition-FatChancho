import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import AddFoodForm from './components/AddFoodForm';
import Searchfood from './components/Searchfood';

function App() {
  const [food,setFood]=useState(foods)
  const [foodData,setFoodData]=useState(foods)

  function insertFood(newFood){ //render new food
    setFood([newFood,...food])
    setFoodData([newFood,...food])
  }
  function mifuncion(str){
    let newStr;
    newStr=foodData.filter((food)=>{
      return food.name.toLowerCase().includes(str.toLowerCase())
    })
    setFood(newStr)
  }
  function deleteFood(foodToDelete){
    const loq=foodData.filter(food=>food!==foodToDelete)
    setFood(loq)
    setFoodData(loq)
  }
  
  return (
    <div className="App">
    <AddFoodForm addFood={insertFood} />
    <Searchfood filter={mifuncion}/>
    
    {food.map((food)=>
      <div key={food.name}>
        <FoodBox food={food} deleteFood={deleteFood}/>  
      </div>)
    }
    
    
     
    </div>
  );
}

export default App;
