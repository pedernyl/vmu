import React from "react";
import FlagFlex from "@/app/flagFlex/page";
import Link from "next/link";

const props = {
  text: <div className="subPage"><h2 className="heading2">Om</h2>
    <div className="heading2">Vår Misjon</div>
    <p className="paragraph">Vår misjon er å samle skientusiaster fra hele verden for å vise solidaritet med Ukraina i
      deres kamp for frihet, rettferdighet og fred. Gjennom våre arrangementer og aktiviteter
      ønsker vi å øke bevisstheten om situasjonen i Ukraina og bidra til humanitær støtte.
    </p>
    <div className="heading2">Våre Verdier</div>
    <ul className="inline">
      <li>Solidaritet: Vi står sammen med det ukrainske folket i deres kamp for frihet og rettferdighet.</li>
      <li>Fellesskap: Vi tror på kraften i samarbeid og samhold for å oppnå positive endringer.</li>
      <li>Åpenhet: Vi er åpne og transparente i våre handlinger og beslutninger.</li>
      <li>Respekt: Vi respekterer mangfoldet av meninger og kulturer, og søker alltid dialog og forståelse.</li>
    </ul>
    <div className="heading2">Våre Aktiviteter</div>
    <p className="paragraph">Gjennom året arrangerer vi en rekke arrangementer, inkludert
      innsamlingsaksjoner, og informasjonskampanjer.
      Disse aktivitetene gir oss muligheten til å spre budskapet om solidaritet med Ukraina og
      samle inn midler til humanitær hjelp.
    </p>
    <div className="heading2">Bli Med Oss</div>
    <p className="paragraph">Vi inviterer deg til å bli med oss i vårt arbeid med å støtte Ukraina.
      Enten det er som frivillig, deltaker på våre arrangementer, eller gjennom økonomisk støtte,
      kan du være med på å gjøre en forskjell.<br />
      Finn ut mer her: <Link href="#join" className="underline">Bli med</Link>
    </p>
  </div>,
  flagLeft: '#0054b1',
  flagRight: '#ffd800'
}

const About = () => {
  return <FlagFlex
      text={props.text}
      flagLeft={props.flagLeft}
      flagRight={props.flagRight}
  />
};

export default About;