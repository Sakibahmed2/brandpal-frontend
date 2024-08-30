import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";

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
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              Search Engine Optimization (SEO)
            </h2>
            <p className="text-gray-600">
              Boost your online presence with our expert SEO services.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Keyword Research & Strategy</li>
              <li>On-Page & Off-Page Optimization</li>
              <li>Technical & Local SEO</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              Pay-Per-Click Advertising (PPC)
            </h2>
            <p className="text-gray-600">
              Maximize your ROI with our targeted PPC campaigns.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Campaign Strategy & Management</li>
              <li>Keyword Targeting</li>
              <li>A/B Testing & Conversion Tracking</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              Social Media Marketing
            </h2>
            <p className="text-gray-600">
              Engage your audience and build brand loyalty.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Social Media Strategy Development</li>
              <li>Content Creation & Curation</li>
              <li>Community Management</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">Content Marketing</h2>
            <p className="text-gray-600">
              Tell your brand’s story with high-quality content.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Content Strategy</li>
              <li>Blog Writing & Visual Content</li>
              <li>Email Marketing Campaigns</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">Email Marketing</h2>
            <p className="text-gray-600">
              Nurture leads and convert them into loyal customers.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Email Campaign Strategy</li>
              <li>Template Design & Automation</li>
              <li>Segmentation & Performance Analytics</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              Web Design & Development
            </h2>
            <p className="text-gray-600">
              Create a responsive, user-friendly website for your brand.
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-500">
              <li>Custom Web Design</li>
              <li>Responsive Development</li>
              <li>UX/UI Design & E-commerce Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
