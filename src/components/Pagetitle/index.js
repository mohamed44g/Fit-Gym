import React from "react";
import "./Pagetitle.scss";
export default function Index(props) {
  return (
    <div className="Page-title text-center">
      <div className="Page-title-highlite">
        <span>{props.highlite}</span>
      </div>
      <h2 className="fw-bold">{props.title}</h2>
    </div>
  );
}
