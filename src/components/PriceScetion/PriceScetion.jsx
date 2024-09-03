import React from 'react';
import PricePlan from '../PricePlan/PricePlan';
const pricingPlans = [
    {
      name: "Basic Plan",
      price: "$29.99",
      description: "Perfect for beginners looking to start their fitness journey.",
      duration: "Monthly",
      features: [
        "Access to gym facilities",
        "Free fitness assessment",
        "Group classes",
      ],
    },
    {
      name: "Standard Plan",
      price: "$49.99",
      description: "Ideal for regular gym-goers who want more flexibility and perks.",
      duration: "Monthly",
      features: [
        "Access to gym facilities",
        "Free fitness assessment",
        "Group classes",
        "Personal training sessions",
        "Access to spa and sauna",
      ],
    },
    {
      name: "Premium Plan",
      price: "$79.99",
      description: "Comprehensive package for fitness enthusiasts seeking maximum benefits.",
      duration: "Monthly",
      features: [
        "Access to gym facilities",
        "Free fitness assessment",
        "Group classes",
        "Unlimited personal training sessions",
        "Access to spa, sauna, and pool",
        "Nutrition consultation",
        "Priority booking for classes",
      ],
    },
  ];
  
const PriceScetion = () => {
    
    return (
            <div className='container mx-auto mt-10 px-6 py-8'>
        <div className=' gap-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
            {
                pricingPlans.map(price => <PricePlan key={price.name} plan={price}></PricePlan> )
            }
        </div>
        </div>
    );
};

export default PriceScetion;