import React from "react";
import "./ChooseUsCard.scss";
import { useInView } from "react-intersection-observer";
import icon3 from "../../assets/images/icons8-progress-66.png";
import icon4 from "../../assets/images/icons8-average-price-60.png";

export default function Index(props) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`ChooseUs-card mb-5 ${
        inView ? 'animate1' : null
      }`}
    >
      <div className="ChooseUs-card-text">
        <h2 className="fw-bold">{props.name}</h2>
        <div className="ChooseUs-card-features d-flex flex-wrap">
          <img
            src="https://assets.website-files.com/60831bedfbf8fb4bf3dcb9f8/6087279ec433ac2a49bfa663_icon_2.svg"
            alt=""
          />
          <p>Personal training</p>
        </div>

        <div className="ChooseUs-card-features d-flex">
          <img src={icon3} alt="" />
          <p>real progress</p>
        </div>

        <div className="ChooseUs-card-features d-flex">
          <img src={icon4} alt="" className="mt-1" />
          <p>best prices</p>
        </div>

        <p className="ChooseUs-card-des">
          Exercise as much as you can anytime, with us you will achieve your
          goals
        </p>
      </div>

      <div className={`${props.class}`}>
        <img src={props.img} alt="img" />
      </div>
    </div>
  );
}
