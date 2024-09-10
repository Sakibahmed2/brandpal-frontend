"use client";

import { useGetSingleTransactionQuery } from "@/redux/api/paymentApi";
import { getUserInfo } from "@/utils/getUserInfo";
import { Bell, CircleUserRound, Mail } from "lucide-react";

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

const addMonthsToDate = (date, months) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

const UserDashboardPage = () => {
  const userInfo = getUserInfo();

  const { data, isLoading } = useGetSingleTransactionQuery({
    email: userInfo.email,
  });

  const { transactionId, email, price, serviceName, status, date } =
    data?.data || {};

  if (isLoading) return <p>Loading...</p>;

  // service end month
  const getServiceEndTime = (serviceTitle) => {
    const service = services.find((s) => s.title === serviceTitle);
    if (service && date) {
      const months = parseInt(service.time.split(" ")[0], 10);
      const endDate = addMonthsToDate(date, months);
      return endDate.toLocaleDateString();
    }
    return "N/A";
  };

  return (
    <div className="min-h-screen">
      <div className="dark:bg-gray-900 bg-gray-50 py-10 px-5 mx-4 lg:mx-0 mt-5 rounded-t-xl">
        <div className="lg:flex justify-between items-center pb-5 text-center lg:text-start">
          <div>
            <h2 className="text-xl lg:text-3xl mt-4 lg:mt-0">
              Good Morning, {userInfo.name || "User"}!
            </h2>
            <p className="light-text">Your ID: {userInfo.id || "N/A"}</p>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-5 text-gray-400 mt-4 lg:mt-0">
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <CircleUserRound size={24} />
            </span>
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <Bell size={24} />
            </span>
            <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
              <Mail size={24} />
            </span>
          </div>
        </div>
        <hr className="border-gray-500 " />
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 p-3 lg:p-5 mt-5 lg:mx-0 mx-4">
        {/* Recent Activity */}
        <div className=" col-span-1 md:col-span-2 lg:col-span-3 dark:bg-gray-800 bg-white mt-4">
          <div className="p-3 lg:p-5">
            <h2 className=" text-secondary text-left lg:text-2xl mb-4 font-semibold">
              Recent Activity
            </h2>
            <ul className="space-y-4">
              {serviceName?.map((service, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">
                      <span className="text-primary">{service}</span>
                    </p>
                    <span className="dark:text-gray-300 text-gray-500 lg:text-sm text-xs">
                      Transaction ID: {transactionId}
                    </span>
                  </div>
                  <div>
                    <span
                      className={
                        status === "completed"
                          ? "text-sky-500"
                          : status === "ongoing"
                          ? "text-green-500"
                          : "text-error"
                      }
                    >
                      {status}
                    </span>
                    <p className="lg:text-sm text-xs">
                      End Time: {getServiceEndTime(service)}
                    </p>
                  </div>
                </li>
              ))}
              <li className="flex justify-between items-center pt-4">
                <div>
                  <p className="font-semibold">Total Price</p>
                  <span className="dark:text-gray-300 text-gray-500">
                    ${price}
                  </span>
                </div>
                <span className="dark:text-gray-300 text-gray-500">
                  {new Date(date).toLocaleDateString()}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
