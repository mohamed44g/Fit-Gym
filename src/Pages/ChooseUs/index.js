<<<<<<< HEAD
import React from 'react';
import img1 from '../../assets/images/ambitious-studio-rick-barrett-g_bglWB48JA-unsplash (1).jpg';
import img2 from '../../assets/images/sam-moghadam-khamseh-vOZP2LojrHI-unsplash.jpg';
import img3 from '../../assets/images/6091b6fb81b2a92b0d466022_services_horizontal_3.jpg';
import img4 from '../../assets/images/prateek-katyal-FNMztJegsSA-unsplash.jpg';
import Pagetitle from '../../components/Pagetitle';
import ChooseUsCard from '../../components/ChooseUsCard';
import './chooseUs.scss';

const features = [
  {
    id: 0,
    name: 'CLASSES',
    img: img1,
  },
  {
    id: 1,
    name: 'PERSONAL TRAINING',
    img: img2,
  },
  {
    id: 2,
    name: 'CROSSFIT',
    img: img3,
  },
  {
    id: 3,
    name: 'BOXING',
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
            className={`ChooseUs-card-img ${feature.id % 2 === 0 ? 'start' : ''}`}
            name={feature.name}
            img={feature.img}
            alt={feature.name} 
          />
        ))}
      </div>
    </section>
  );
}
=======
import React, { useState } from "react";
import img1 from "../../assets/images/ambitious-studio-rick-barrett-g_bglWB48JA-unsplash (1).jpg";
import img2 from "../../assets/images/sam-moghadam-khamseh-vOZP2LojrHI-unsplash.jpg";
import img3 from "../../assets/images/6091b6fb81b2a92b0d466022_services_horizontal_3.jpg";
import img4 from "../../assets/images/prateek-katyal-FNMztJegsSA-unsplash.jpg";
import Pagetitle from "../../compentants/Pagetitle/index";
import ChooseUsCard from "../../compentants/ChooseUsCard/index";
import "./chooseUs.scss";

export default function ChooseUs() {
  const i = [
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

  return (
    <div className="ChooseUs container">
      <Pagetitle highlite="our features" title="WHY CHOOSE US" />
      <div className="ChooseUs-cards mt-5">
        {i.map((ele) => {
          return ele.id % 2 === 0 ? (
            <ChooseUsCard
              key={ele.id}
              class="ChooseUs-card-img start"
              name={ele.name}
              img={ele.img}
            />
          ) : (
            <ChooseUsCard
              key={ele.id}
              class="ChooseUs-card-img"
              name={ele.name}
              img={ele.img}
            />
          );
        })}
      </div>
    </div>
  );
}
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
