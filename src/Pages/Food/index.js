
import React, { useState, useCallback, useTransition } from "react";
import Progress from "../../components/CircularProgress/index";
import "./Food.scss";
import { get_food } from "../../Services/api";

// Form Component
const Form = ({ onCalculate }) => {
  const foodRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodRef.current) {
      onCalculate(foodRef.current.value);
    }
  };

  return (
    <div className="Food-form d-flex flex-wrap justify-content-between">
      <div className="Food-input-con">
        <label htmlFor="input" className="label">
          Food
        </label>
        <input id="input" className="Food-input" type="text" ref={foodRef} />
      </div>

      <div className="submit">
        <button
          className="btn btn-warning submit-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Calc
        </button>
      </div>
    </div>
  );
};

// Result Component
const Result = ({ data }) => (
  <div className="food-resuilt d-flex justify-content-center flex-wrap">
    <Progress
      calory={`${data[0].calories}cal`}
      category={"Calories per 100g"}
    />
    <Progress calory={`${data[0].protein_g}g`} category={"Protein per 100g"} />
    <Progress
      calory={`${data[0].carbohydrates_total_g}g`}
      category={"Carb per 100g"}
    />
    <Progress calory={`${data[0].fat_total_g}g`} category={"Fat per 100g"} />
  </div>
);

export default function FoodCalories() {
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleCalculate = useCallback(async (food) => {
    startTransition(async () => {
      try {
        const foodDetail = await get_food(food);
        setData(foodDetail);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    });
  }, []);

  return (
    <div className="CaloriesCalc container">
      <div className="CaloriesCalc-form-container">
        <div className="CaloriesCalc-title">
          <h2>Food Calories</h2>
          {isPending ? (
            <p>Loading...</p>
          ) : data ? (
            <Result data={data} />
          ) : (
            <Form onCalculate={handleCalculate} />
          )}
        </div>
      </div>
    </div>
  );
}