import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="card-body ">
        <div className="mb-2 mx-auto lg:mx-0">
          <p className="border p-2 rounded-md w-20 flex justify-center items-center bg-secondary/20">
            {service.icon}
          </p>
        </div>
        <h2 className="card-title text-secondary text-center">
          {service.title}
        </h2>
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
