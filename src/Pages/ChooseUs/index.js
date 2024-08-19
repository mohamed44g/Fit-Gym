import React from "react";
import img1 from "../../assets/images/ambitious-studio-rick-barrett-g_bglWB48JA-unsplash (1).jpg";
import img2 from "../../assets/images/sam-moghadam-khamseh-vOZP2LojrHI-unsplash.jpg";
import img3 from "../../assets/images/6091b6fb81b2a92b0d466022_services_horizontal_3.jpg";
import img4 from "../../assets/images/prateek-katyal-FNMztJegsSA-unsplash.jpg";
import Pagetitle from "../../components/Pagetitle";
import ChooseUsCard from "../../components/ChooseUsCard";
import "./chooseUs.scss";

const features = [
  {
    id: 0,
    name: "CLASSES",
    img: img1,
  },
  {
    id: 1,
    name: "PERSONAL TRAINING",
    img: img2,
  },
  {
    id: 2,
    name: "CROSSFIT",
    img: img3,
  },
  {
    id: 3,
    name: "BOXING",
    img: img4,
  },
];

export default function ChooseUs() {
  return (
    <section className="ChooseUs container">
      <Pagetitle highlite="our features" title="WHY CHOOSE US" />
      <div className="ChooseUs-cards mt-5">
        {features.map((feature) => (
          <ChooseUsCard
            key={feature.id}
            className={`ChooseUs-card-img ${
              feature.id % 2 === 0 ? "start" : ""
            }`}
            name={feature.name}
            img={feature.img}
            alt={feature.name} // Adding alt attribute for accessibility
          />
        ))}
      </div>
    </section>
  );
}
