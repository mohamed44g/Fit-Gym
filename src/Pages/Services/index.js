<<<<<<< HEAD
import React from "react";
import img1 from "../../assets/images/icons8-cardio-67.png";
import img2 from "../../assets/images/icons8-dumbbell-50.png";
import img3 from "../../assets/images/icons8-real-food-for-meals-96.png";
import img4 from "../../assets/images/icons8-supplements-64.png";
import ServicesCard from "../../components/ServicesCard";
import "./Services.scss";

const servicesData = [
  {
    img: img1,
    title: "Cardio",
    description: "Tread mill, ropes, bicycles and more.",
  },
  {
    img: img2,
    title: "Programs",
    description: "Workout programs, exercises, and more.",
  },
  {
    img: img3,
    title: "Meal Plan",
    description: "Food calculator, calories calculator.",
  },
  {
    img: img4,
    title: "Supplement",
    description: "Protein powder and supplement for free.",
  },
];

export default function Services() {
  return (
    <section className="Services">
      <div className="Services-cards d-flex flex-wrap">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
=======
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
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
