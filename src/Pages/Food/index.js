import React, { useRef,useState } from "react";
import Progress from "../../compentants/CircularProgress/index";
import "./Food.scss";
import { get_food } from "../../Services/api";

export default function FoodCalories() {
  const food = useRef();
  const [data, setdata] = useState();

  const handleclick = async () => {
    let user_food = food.current.value;
    const food_detail = await get_food(user_food);
    setdata(food_detail);
  };

  function Form() {
    return (
      <div className="Food-form d-flex flex-wrap justify-content-between">
        <div className="Food-input-con">
          <label htmlFor="input" className="label">
            Food
          </label>
          <input className="Food-input" type="text" ref={food} />
        </div>

        <div className="submit">
          <input type="submit" value="Calc" onClick={handleclick} />
        </div>
      </div>
    );
  }

  function Resuilt() {
    return (
      <div className="food-resuilt d-flex justify-content-center flex-wrap">
        <Progress
          calory={`${data.calories}cal`}
          category={"Calories per 100g"}
        />

        <Progress calory={`${data.protein_g}g`} category={"Protein per 100g"} />

        <Progress
          calory={`${data.carbohydrates_total_g}g`}
          category={"Carb per 100g"}
        />

        <Progress calory={`${data.fat_total_g}g`} category={"Fat per 100g"} />
      </div>
    );
  }

  return (
    <div className="CaloriesCalc container">
      <div className="CaloriesCalc-form-container">
        <div className="CaloriesCalc-title">
          <h2>Food Calories</h2>
          {data ? <Resuilt /> : <Form />}
          {console.log(data)}
        </div>
      </div>
    </div>
  );
}
