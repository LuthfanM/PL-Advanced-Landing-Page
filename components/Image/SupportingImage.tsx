import { SUPPORTING_IMAGE } from "@/constants";
import React from "react";

const SupportingImage = () => {
  return (
    <>
      <img src={SUPPORTING_IMAGE} alt="supporting-image" className="h-[100%] w-[100%]" />
    </>
  );
};

export default SupportingImage;
