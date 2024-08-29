import React from "react";
import bannerImg from "@/assets/bannerImg.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="pt-28 md:pt-40">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="mt-5 md:mt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl w-[250px] md:w-full font-semibold">
            The next level marketing digital{" "}
          </h1>
          <p className="light-text mt-6 mb-7 md:mb-9 w-full max-w-[500px]">
            Make your marketing something show off. And effective strategies
            your need and branding goal
          </p>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 w-1/2 lg:w-full">
            <button className="custom-secondary-btn py-3 md:py-5">
              Get Started
            </button>
            <button className="custom-primary-btn py-3 md:py-5">
              Try to free trial
            </button>
          </div>
        </div>
        <div>
          <Image src={bannerImg} width={500} height={500} alt="Banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
