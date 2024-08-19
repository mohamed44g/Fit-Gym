import React from "react";
import "./ExerciseCard.scss";

export default function Index(props) {
  return (
    <div className={`Exercise-card d-flex flex-column mb-5`}>
      <div className={`Exercise-card-img`}>
        <img src={props.img} alt="img" />
      </div>

      <div className="Exercise-card-text">
        <h4 className="fw-bold">{props.name}</h4>
        <div className="Exercise-card-des">
          <p>SETS: 3</p>
          <p>REPS: 8 - 12</p>
          <p>REST: 1m - 3m</p>
        </div>
      </div>
    </div>
  );
}
