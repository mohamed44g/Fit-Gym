
import React from 'react';
import Pagetitle from '../../components/Pagetitle';
import PricesCard from '../../components/PriceCard';
import './Price.scss';


const pricingData = [
  {
    id: 0,
    name: 'REGULAR',
    price: '10',
    features: [
      'Bodybuilding',
      '4 days per week',
      'Free diet',
      'No private coaches',
      '3 hours maximum',
      'No free supplements',
    ],
  },
  {
    id: 1,
    name: 'PRO',
    price: '20',
    features: [
      'Bodybuilding & cardio',
      '5 days per week',
      'Free diet',
      'Private coaches',
      '6 hours maximum',
      'Free supplements',
    ],
  },
  {
    id: 2,
    name: 'PLUS',
    price: '30',
    features: [
      'Bodybuilding & cardio',
      'Full week',
      'Free diet',
      'Private coaches',
      'Unlimited time',
      'Free supplements',
    ],
  },
];

export default function Prices() {
  return (
    <div className="Prices container">
      <Pagetitle highlite="our prices" title="PRICE FOR ALL" />
      <div className="Prices-cards d-flex justify-content-between flex-wrap">
        {pricingData.map((plan) => (
          <PricesCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}