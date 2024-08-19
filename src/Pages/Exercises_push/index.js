<<<<<<< HEAD
import React, { useState, useEffect, useTransition } from "react";
import ExerciseCard from "../../components/ExerciseCard";
import "./Exercises_push.scss";

export default function Push() {
  const [day, setDay] = useState(1);
  const [exercises, setExercises] = useState([]);
  const [isPending, startTransition] = useTransition(); // Use useTransition hook

  useEffect(() => {
    const fetchData = async () => {
      const route = localStorage.getItem("workout");
      let data;

      if (route === "push") {
        data = await import("../../Services/data/push_exercise");
        setExercises(data.push);
      } else {
        data = await import("../../Services/data/split");
        setExercises(data.split);
      }
    };

    fetchData();
  }, []);

  function handleClick(event) {
    const newDay = Number(event.currentTarget.id);
    startTransition(() => {
      setDay(newDay);
    });
  }

  return (
    <div className="Exercise container">
      <div className="Exercise-days">
        <div className="d-flex justify-content-center">
          {exercises.length > 0 &&
            exercises.map((_, index) => (
              <p
                key={index}
                className={`Exercise-days-tab ${
                  index + 1 === day ? "active" : ""
                }`}
                id={index + 1}
                onClick={handleClick}
              >
                Day {index + 1}
              </p>
            ))}
        </div>
      </div>
      <hr />
      <div className="Exercise-cards d-flex flex-wrap justify-content-between">
        {exercises.length > 0 &&
          exercises[day - 1]?.map((ele) => (
            <ExerciseCard key={ele.id} name={ele.name} img={ele.img} />
          ))}
      </div>
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";
import ExerciseCard from "../../compentants/ExerciseCard/index";
import "./Exercises_push.scss";

export default function Push() {
  const [day, setDay] = useState(1);
  const [exercises, setExercises] = useState();

  useEffect(() => {
    const route = localStorage.getItem("workout");
    if (route === "push") {
      const data = require("../../Services/data/push_exercise");
      setExercises(data.push);
    } else {
      const data = require("../../Services/data/split");
      setExercises(data.split);
    }
  }, []);

  function handleclick(event) {
    let eles = document.querySelectorAll(".Exercise-days-tab");
    eles.forEach((ele) => ele.classList.remove("active"));
    event.currentTarget.classList.add("active");
    setDay(event.currentTarget.id);
  }

  return (
    <div className="Exercise container">
      <div className="Exercise-days">
        <div className="d-flex justify-content-center">
          {exercises &&
            exercises.map((ele, index) =>
              index === 0 ? (
                <p
                  key={index}
                  className="Exercise-days-tab active"
                  id="1"
                  onClick={handleclick}
                >
                  day 1
                </p>
              ) : (
                <p
                  key={index}
                  className="Exercise-days-tab"
                  id={index + 1}
                  onClick={handleclick}
                >
                  day {index + 1}
                </p>
              )
            )}
        </div>
      </div>
      <hr />
      <div className="Exercise-cards d-flex flex-wrap justify-content-between">
        {exercises &&
          exercises[day - 1].map((ele) => (
            <ExerciseCard key={ele.id} name={ele.name} img={ele.img} />
          ))}
      </div>
    </div>
  );
}
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
