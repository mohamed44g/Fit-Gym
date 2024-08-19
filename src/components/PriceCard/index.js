import React from "react";
import "./PriceCard.scss";
import { useInView } from "react-intersection-observer";

export default function Index(props) {
  const { ref, inView } = useInView();
  return (
    <div className={`Prices-card ${inView ? `animate1` : null}`} ref={ref}>
      <div className="Prices-card-title ">
        <h4 className="fw-bold">{props.name}</h4>
        <h4>{props.price}$</h4>
      </div>

      <div className="Prices-card-features mt-5">
        {props.features.map((ele, index) => (
          <p key={index} className="mt-2">
            {ele}
          </p>
        ))}
      </div>

      <div>
        <button className="btn Prices-card-btn">Join</button>
      </div>
    </div>
  );
}
