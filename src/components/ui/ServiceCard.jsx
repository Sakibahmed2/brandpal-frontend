"use client";

import cn from "@/utils/cn";
import { ArrowRight, MoveRight } from "lucide-react";
import React, { useState } from "react";

const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <div
      className={cn(
        "w-full max-w-[350px] md:h-[412px] mx-auto bg-white rounded-2xl duration-300 ease-in-out",
        isHovered ? "shadow-2xl" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "p-10 md:p-6  flex flex-col justify-center items-center transition-colors duration-300 ease-in-out",
          isHovered ? "text-primary" : "text-secondary"
        )}
      >
        <p>{icon}</p>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mt-16 mt-8">
          {title}
        </h3>
        <p
          className={cn(
            "md:text-xl transition-colors duration-300 ease-in-out",
            isHovered ? "text-black" : "text-gray-400"
          )}
        >
          {description}
        </p>
        <p className="mt-14">
          <MoveRight size={32} />
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
