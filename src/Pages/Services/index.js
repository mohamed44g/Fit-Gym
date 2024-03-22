import React from "react";
import img1 from "../../assets/images/icons8-cardio-67.png";
import img2 from "../../assets/images/icons8-dumbbell-50.png";
import img3 from "../../assets/images/icons8-real-food-for-meals-96.png";
import img4 from "../../assets/images/icons8-supplements-64.png";
import ServicesCard from "../../compentants/ServicesCard/index";
import "./Services.scss";

export default function Services() {
  return (
    <>
      <div className="Services">
        <div className="Services-cards d-flex flex-wrap">
          <ServicesCard
            img={img1}
            title={"Cardio"}
            descreption={"Tread mill, ropes, bicycles and more."}
          />
          <ServicesCard
            img={img2}
            title={"Programs"}
            descreption={"workout programs, exercises and more."}
          />
          <ServicesCard
            img={img3}
            title={"Meal plan"}
            descreption={"food calculator, Calories calculator."}
          />
          <ServicesCard
            img={img4}
            title={"Supplement"}
            descreption={"Protein powder and Supplement for free."}
          />
        </div>
      </div>
    </>
  );
}
