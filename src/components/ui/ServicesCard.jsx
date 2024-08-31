import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="rounded-md bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="card-body">
        <h2 className="card-title text-secondary">{service.title}</h2>
        <p className="text-gray-500">{service.description}</p>
        <ul className="list-disc pl-5 mt-3 text-gray-400">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
