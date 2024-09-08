import Container from "@/components/ui/Container";
import React from "react";

import socialMediaMarketing from "@/assets/icons/social-media-marketing.svg";
import emailMarketing from "@/assets/icons/email-marketing.svg";
import seo from "@/assets/icons/SEo.svg";
import payPerClick from "@/assets/icons/pay-per-click.svg";
import contentWriting from "@/assets/icons/content-writing.svg";
import webDevelopment from "@/assets/icons/web-development.svg";

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
  },
];

const SingleService = ({ params }) => {
  const service = services.find((service) => service.id == params.serviceId);

  console.log(service);

  return (
    <Container>
      <div className="pt-20 lg:pt-32 pb-20"></div>
    </Container>
  );
};

export default SingleService;
