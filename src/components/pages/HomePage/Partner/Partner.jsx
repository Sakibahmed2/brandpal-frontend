import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import google from "@/assets/google.png";
import sublimeText from "@/assets/sublimeText.png";
import blender from "@/assets/blender.png";
import soundCloud from "@/assets/sound_cloud.png";
import mi from "@/assets/mi.png";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="md:mt-32 mt-10">
      <div className="mx-auto text-center w-[140px] md:w-full">
        <SectionTitle
          title={"PARTNER"}
          description={"Our brand collaboration"}
        />
      </div>

      {/* company logo */}
      <div className="grid grid-cols-6 md:grid-cols-5 justify-items-center items-center gap-4 mt-10 md:mt-24">
        <Image
          src={soundCloud}
          width={100}
          height={100}
          alt="Sound cloud logo"
          className="md:w-28 w-16 col-span-2 md:col-span-1"
        />

        <Image
          src={google}
          width={100}
          height={100}
          alt="Sound cloud logo"
          className="md:w-28 w-16 col-span-2 md:col-span-1"
        />

        <Image
          src={sublimeText}
          width={100}
          height={100}
          alt="Sound cloud logo"
          className="md:w-28 w-16 col-span-2 md:col-span-1"
        />

        <Image
          src={blender}
          width={100}
          height={100}
          alt="Sound cloud logo"
          className="md:w-28 w-16 col-span-3 md:col-span-1"
        />

        <Image
          src={mi}
          width={100}
          height={100}
          alt="Sound cloud logo"
          className="md:w-28 w-16 col-span-3 md:col-span-1"
        />
      </div>
    </div>
  );
};

export default Partner;
