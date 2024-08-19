import React from "react";
import "./CircularProgress.scss";

export default function Index(props) {
  return (
    <div className="progress-con">
      <div className="circular-progress">
        <span className="progress-value">{props.calory}</span>
      </div>
      <p className="progress-text">{props.category}</p>
    </div>
  );
}
