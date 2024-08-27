import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { PanelsTopLeft, SquarePen, Video } from "lucide-react";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="mt-40">
      <div className="text-center">
        <SectionTitle
          title={"WHAT WE DO?"}
          description={"Our Digital Marekting Expertice"}
        />
      </div>

      <div className="mt-10 md:mt-28 md:flex justify-center items-center gap-5 space-y-10 md:space-y-0">
        <ServiceCard
          title={"Content Writing"}
          description={"Create interesting and innovative content"}
          icon={<SquarePen className="size-8 md:size-16 " />}
        />
        <ServiceCard
          title={"Video Producing"}
          description={
            "Improve your video online. And grow your marketing with video producing"
          }
          icon={<Video className="size-8 md:size-16 " />}
        />
        <ServiceCard
          title={"Web Development"}
          description={"Improve your website, and app to make it easier"}
          icon={<PanelsTopLeft className="size-8 md:size-16 " />}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
