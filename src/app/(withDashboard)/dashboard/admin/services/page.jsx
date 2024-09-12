import React from "react";

import socialMediaMarketing from "@/assets/icons/social-media-marketing.svg";
import emailMarketing from "@/assets/icons/email-marketing.svg";
import seo from "@/assets/icons/SEo.svg";
import payPerClick from "@/assets/icons/pay-per-click.svg";
import contentWriting from "@/assets/icons/content-writing.svg";
import webDevelopment from "@/assets/icons/web-development.svg";
import Image from "next/image";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

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
    description: "Tell your brands story with high-quality content.",
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

const DashboardServicesPage = () => {
  return (
    <div className="mt-5 h-screen mx-5 lg:mx-0">
      <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-50 p-5 rounded-md">
        <p className="text-xl lg:text-2xl">Services</p>
        <Link href={"/dashboard/admin/services/add-service"}>
          <button className="custom-dashboard-btn">Add service</button>
        </Link>
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 p-5 mt-5 rounded-lg ">
        <div className="overflow-x-auto ">
          <table className="table   text-center ">
            {/* head */}
            <thead className="text-white/80">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id}>
                  <th>{index + 1}</th>
                  <th>
                    <div className="bg-sky-400 text-white flex justify-center items-center py-2  rounded-md">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        height={24}
                        width={24}
                      />
                    </div>
                  </th>
                  <td>{service.title}</td>

                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <button className="bg-blue-500 p-2 rounded-sm">
                        <Pencil size={18} />
                      </button>
                      <button className="bg-red-500 p-2 rounded-sm ">
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardServicesPage;
