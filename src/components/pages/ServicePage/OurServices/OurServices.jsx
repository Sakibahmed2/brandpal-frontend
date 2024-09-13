"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ServicesCard from "@/components/ui/ServicesCard";
import React from "react";

import socialMediaMarketing from "@/assets/icons/social-media-marketing.svg";
import emailMarketing from "@/assets/icons/email-marketing.svg";
import seo from "@/assets/icons/SEo.svg";
import payPerClick from "@/assets/icons/pay-per-click.svg";
import contentWriting from "@/assets/icons/content-writing.svg";
import webDevelopment from "@/assets/icons/web-development.svg";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import LoadingPage from "@/components/ui/LoadingPage";

const services = [
  {
    id: 1,
    icon: seo,
    title: "Search Engine Optimization (SEO)",
    description: "Boost your online presence with our expert SEO services.",
    features: [
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Technical & Local SEO",
    ],
    time: "6 months",
    price: 1500,
  },
  {
    id: 2,
    icon: payPerClick,
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize your ROI with our targeted PPC campaigns.",
    features: [
      "Campaign Strategy & Management",
      "Keyword Targeting",
      "A/B Testing & Conversion Tracking",
    ],
    time: "3 months",
    price: 1200,
  },
  {
    id: 3,
    icon: socialMediaMarketing,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
    ],
    time: "6 months",
    price: 900,
  },
  {
    id: 4,
    icon: contentWriting,
    title: "Content Marketing",
    description: "Tell your brand’s story with high-quality content.",
    features: [
      "Content Strategy",
      "Blog Writing & Visual Content",
      "Email Marketing Campaigns",
    ],
    time: "1 month",
    price: 500,
  },
  {
    id: 5,
    icon: emailMarketing,
    title: "Email Marketing",
    description: "Nurture leads and convert them into loyal customers.",
    features: [
      "Email Campaign Strategy",
      "Template Design & Automation",
      "Segmentation & Performance Analytics",
    ],
    time: "2 months",
    price: 750,
  },
  {
    id: 6,
    icon: webDevelopment,
    title: "Web Design & Development",
    description: "Create a responsive, user-friendly website for your brand.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "UX/UI Design & E-commerce Solutions",
    ],
    time: "3 months",
    price: 2500,
  },
];

const OurServices = () => {
  const { data, isLoading } = useGetAllServicesQuery({});

  if (isLoading) return <LoadingPage />;

  const serviceData = data?.data;

  return (
    <div className="mt-20">
      <div className="text-center">
        <SectionTitle
          title={"Our services"}
          description={"Grow your brand with our digital marketing solutions."}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {serviceData.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
