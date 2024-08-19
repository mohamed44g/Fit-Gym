<<<<<<< HEAD
import React, { useRef, useState } from "react";
import Progress from "../../components/CircularProgress/index";
import "./Calories_calc.scss";
import { get_calory } from "../../Services/api";
export default function CaloriesCalc() {
  const age = useRef();
  const gender = useRef();
  const hight = useRef();
  const weight = useRef();
  const level = useRef();

  const [data, setdata] = useState();

  const handleclick = async () => {
    const information = {
      user_age: age.current.value,
      gender_age: gender.current.value,
      hight_age: hight.current.value,
      weight_age: weight.current.value,
      level_age: level.current.value,
    };

    const user_detail = await get_calory(information);
    console.log("user_detail", user_detail);
    console.log("user_detail");
    setdata(user_detail);
  };

  function Form() {
    return (
      <div className="CaloriesCalc-form d-flex flex-wrap justify-content-between">
        <div className="input-con">
          <label htmlFor="input" className="label">
            Age
          </label>
          <input className="input" type="text" ref={age} />
        </div>

        <div className="input-con">
          <label htmlFor="activity" className="Gender-label">
            Gender
          </label>
          <select
            id="activity"
            name="activity"
            className="activity"
            ref={gender}
          >
            <option value="male">male</option>
            <option value="femal">femal</option>
          </select>
        </div>

        <div className="input-con">
          <label htmlFor="input" className="label">
            Hight
          </label>
          <input className="input" type="text" placeholder="Cm" ref={hight} />
        </div>

        <div className="input-con">
          <label htmlFor="input" className="label">
            Weight
          </label>
          <input className="input" type="text" placeholder="Kg" ref={weight} />
        </div>

        <div className="input-con">
          <label htmlFor="activity" className="Gender-label">
            Activity
          </label>
          <select
            id="activity"
            name="activity"
            className="activity"
            ref={level}
          >
            <option value="level_1">little or no exercise</option>
            <option value="level_2">Exercise 1-3 times/week</option>
            <option value="level_3">Exercise 4-5 times/week</option>
            <option value="level_4">
              Daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="level_5">Intense exercise 6-7 times/week</option>
            <option value="level_6">Very intense exercise daily,</option>
          </select>
        </div>

        <div className="submit">
          <input type="submit" value="Calc" onClick={handleclick} />
        </div>
      </div>
    );
  }

  function Resuilt() {
    return (
      <div className="resuilt d-flex justify-content-center flex-wrap">
        <Progress
          calory={`${Math.round(data["maintain weight"])}cal`}
          category={"your Calories per day"}
        />

        <Progress
          calory={`${Math.round(data["Weight gain"]["calory"])}cal`}
          category={"For gean 0.5 kg per week"}
        />

        <Progress
          calory={`${Math.round(data["Weight loss"]["calory"])}cal`}
          category={"For loss 0.5 kg per week"}
        />
      </div>
    );
  }

  return (
    <div className="CaloriesCalc container">
      <div className="CaloriesCalc-form-container">
        <div className="CaloriesCalc-title">
          <h2>Calorie</h2>
          {data ? <Resuilt /> : <Form />}
        </div>
      </div>
    </div>
  );
}
=======
import React, { useRef, useState } from "react";
import Progress from "../../compentants/CircularProgress/index";
import "./Calories_calc.scss";
import { get_calory } from "../../Services/api";
export default function CaloriesCalc() {
  const age = useRef();
  const gender = useRef();
  const hight = useRef();
  const weight = useRef();
  const level = useRef();

  const [data, setdata] = useState();

  const handleclick = async () => {
    const information = {
      user_age: age.current.value,
      gender_age: gender.current.value,
      hight_age: hight.current.value,
      weight_age: weight.current.value,
      level_age: level.current.value,
    };

    const user_detail = await get_calory(information);
    setdata(user_detail);
  };

  function Form() {
    return (
      <div className="CaloriesCalc-form d-flex flex-wrap justify-content-between">
        <div className="input-con">
          <label htmlFor="input" className="label">
            Age
          </label>
          <input className="input" type="text" ref={age} />
        </div>

        <div className="input-con">
          <label htmlFor="activity" className="Gender-label">
            Gender
          </label>
          <select
            id="activity"
            name="activity"
            className="activity"
            ref={gender}
          >
            <option value="male">male</option>
            <option value="femal">femal</option>
          </select>
        </div>

        <div className="input-con">
          <label htmlFor="input" className="label">
            Hight
          </label>
          <input className="input" type="text" placeholder="Cm" ref={hight} />
        </div>

        <div className="input-con">
          <label htmlFor="input" className="label">
            Weight
          </label>
          <input className="input" type="text" placeholder="Kg" ref={weight} />
        </div>

        <div className="input-con">
          <label htmlFor="activity" className="Gender-label">
            Activity
          </label>
          <select
            id="activity"
            name="activity"
            className="activity"
            ref={level}
          >
            <option value="level_1">little or no exercise</option>
            <option value="level_2">Exercise 1-3 times/week</option>
            <option value="level_3">Exercise 4-5 times/week</option>
            <option value="level_4">
              Daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="level_5">Intense exercise 6-7 times/week</option>
            <option value="level_6">Very intense exercise daily,</option>
          </select>
        </div>

        <div className="submit">
          <input type="submit" value="Calc" onClick={handleclick} />
        </div>
      </div>
    );
  }

  function Resuilt() {
    return (
      <div className="resuilt d-flex justify-content-center flex-wrap">
        <Progress
          calory={`${Math.round(data["maintain weight"])}cal`}
          category={"your Calories per day"}
        />

        <Progress
          calory={`${Math.round(data["Weight gain"]["calory"])}cal`}
          category={"For gean 0.5 kg per week"}
        />

        <Progress
          calory={`${Math.round(data["Weight loss"]["calory"])}cal`}
          category={"For loss 0.5 kg per week"}
        />
      </div>
    );
  }

  return (
    <div className="CaloriesCalc container">
      <div className="CaloriesCalc-form-container">
        <div className="CaloriesCalc-title">
          <h2>Calorie</h2>
          {data ? <Resuilt /> : <Form />}
        </div>
      </div>
    </div>
  );
}
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
