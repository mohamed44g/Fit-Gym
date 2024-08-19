import React from "react";
import "./ServicesCard.scss";

export default function Index(props) {
  return (
    <div className="Services-card card text-center mb-3">
      <div className="card-body">
        <img src={props.img} alt="" className="Services-card-img" />
        <h5 className="card-text mt-3 fw-bold">{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
