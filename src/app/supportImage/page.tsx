import React from "react";
import Image from "next/image";

const SupportImage = () => {
  return (
      <Image
          src={'/nsupportsu3.jpeg'}
          alt="norway støtter ukraina"
          width={1000}
          height={1000}
          className="supportImage"
      />

  )
};

export default SupportImage;