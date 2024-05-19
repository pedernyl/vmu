import React from "react";
import Image from "next/image";

const NorwayRound = () => {
  return (
      <Image
          src={'/norway_trans.png'}
          alt="norge rund"
          height={100}
          width={100}
          layout="fixed"
          objectFit="cover"
      />

  )
};

export default NorwayRound;