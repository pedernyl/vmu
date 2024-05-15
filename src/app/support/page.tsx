import React from "react";
import Gifts from "@/app/gift/page";
import BeMember from "@/app/beMember/page";
import UkraineRound from "@/app/ukraineRound/page";
import NorwayRound from "@/app/norwayRound/page";
import SupportImage from "@/app/supportImage/page";

const Support = () => {
  return (
      <div className="subPage w-full flex-col justify-center">
        <div className="supportHeader">
          <NorwayRound />
          <h2 className="heading2">Normenn står enade med Ukraina</h2>
          <UkraineRound/>
        </div>
        <SupportImage />
        <div className="supportFooter">
            <div className="beMember">
                <h3 className="heading3">Bli medlem</h3>
                Betal medlemskontingent 100NOK till kontonummer 4214 16 82347<br />
                Husk at skriv navn og epost
            </div>
            <div className="gepenger">
                <h3 className="heading3">Ge gåve</h3>
                Sett inn valfri belopp på kontonummer: 4214 16 82347
            </div>
        </div>
      </div>
  )
};

export default Support;