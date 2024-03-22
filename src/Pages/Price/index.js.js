import React, { useState } from "react";
import Pagetitle from "../../compentants/Pagetitle/index";
import PricesCard from "../../compentants/PriceCard/index";
import "./Price.scss";
export default function Prices() {
  const [data] = useState([
    {
      id: 0,
      name: "REGULAR",
      price: "10",
      features: [
        "bodyBuliding",
        "4 days per week",
        "Free diet",
        "no private coaches",
        "3 hours maximaum",
        "no free Supplements",
      ],
    },

    {
      id: 1,
      name: "PRO",
      price: "20",
      features: [
        "bodyBuliding & cardio",
        "5 days per week",
        "Free diet",
        "private coaches",
        "6 hours maximaum",
        "free Supplements",
      ],
    },

    {
      id: 2,
      name: "PLUS",
      price: "30",
      features: [
        "bodyBuliding & cardio",
        "full week",
        "Free diet",
        "private coaches",
        "Unlimited time",
        "free Supplements",
      ],
    },
  ]);
  return (
    <div className="Prices container">
      <Pagetitle highlite="our prices" title="PRICE FOR ALL" />
      <div className={`Prices-cards d-flex justify-content-between flex-wrap`}>
        {data.map((ele) => (
          <PricesCard
            key={ele.id}
            name={ele.name}
            price={ele.price}
            features={ele.features}
          />
        ))}
      </div>
    </div>
  );
}
