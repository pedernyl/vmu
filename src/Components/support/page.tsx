import React from "react";
import UkraineRound from "@/Components/ukraineRound/page";
import NorwayRound from "@/Components/norwayRound/page";
import SupportImage from "@/Components/supportImage/page";

const Support = () => {
  return (
      <div className="subPage w-full flex-col justify-center">
        <div className="supportHeader">
          <NorwayRound />
            <h2 className="heading2 mobileHidden">Nordmenn står enade med Ukraina</h2>
          <h2 className="heading2 desktopHide">Støtt</h2>
          <UkraineRound/>
        </div>
        <SupportImage />
        <div className="supportFooter">
            <div className="beMember mobileHidden">
                <h3 className="heading3">Bli medlem</h3>
                Betal medlemskontingent 100NOK till kontonummer 4214 16 82347<br />
                Husk at skriv navn og epost
            </div>
            <div className="gepenger">
                <h3 className="heading3">Gi gave</h3>
                <p className="mobileHidden">Sett inn valfri belopp på </p>kontonummer: 4214 16 82347
            </div>
        </div>
      </div>
  )
};

export default Support;