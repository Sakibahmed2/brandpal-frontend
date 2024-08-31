import SectionTitle from "@/components/ui/SectionTitle";
import ServicesCard from "@/components/ui/ServicesCard";
import React from "react";
import { PanelsTopLeft, SquarePen, Video } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <PanelsTopLeft size={48} />,
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
    icon: <PanelsTopLeft size={48} />,
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
    icon: <PanelsTopLeft size={48} />,
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
    title: "Web Design & Development",
    description: "Create a responsive, user-friendly website for your brand.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "UX/UI Design & E-commerce Solutions",
    ],
  },
];

const OurServices = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <SectionTitle
          title={"Our services"}
          description={"Grow your brand with our digital marketing solutions."}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
