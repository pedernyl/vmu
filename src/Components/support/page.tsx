import React from "react";
import UkraineRound from "@/Components/ukraineRound/page";
import NorwayRound from "@/Components/norwayRound/page";
import SupportImage from "@/Components/supportImage/page";
import Join from "../join/page";

const Support = () => {
  return (
      <div className="subPage w-full flex-col justify-center">
        <div className="supportHeader">
          <NorwayRound />
            <h2 className="heading2 mobileHidden">Vi står enade med Ukraina</h2>
          <h2 className="heading2 desktopHide">Støtt</h2>
          <UkraineRound/>
        </div>
        <div id="join" className="w-full content">
          <Join />
        </div>
        
      </div>
  )
};

export default Support;