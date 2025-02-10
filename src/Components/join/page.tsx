import React from "react";
import Link from "next/link";



const Join = () => {
  return <div className="subPage">
      <p className="paragraph">
      Under Ski-VM i Trondheim har du en unik mulighet til å vise solidaritet med det ukrainske folket.<br /> 
      Ved å gi en donasjon til en av disse fire organisasjonene, kan du bidra til livsviktig hjelp og støtte til 
      mennesker som er berørt av krigen.<br />
      <br />
      Velg en organisasjon og gi din støtte:
      </p>
    <div className="joinContainer">
      <div className="blueBox colorBox">
        <strong>Røde Kors</strong><br />
        <p className="mobileHidden tabletHidden">
        Røde Kors arbeid i Ukraina&nbsp; 
        <Link 
          href="https://www.rodekors.no/vart-arbeid/internasjonal/europa/ukraina"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>  
        </Link>
        <br /><br />
        Gi din støtte til Røde Kors&nbsp;
        <Link
          href="https://www.rodekors.no/stott-arbeidet/"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>  
        </p>
      </div>
      <div className="yBox colorBox">
        <strong>Norsk Folkehjelp</strong><br />
        <p className="mobileHidden tabletHidden">
          Norsk Folkehjelps arbeid i Ukraina
          &nbsp;
        <Link
          href="https://folkehjelp.no/miner-og-eksplosiver/her-jobber-vi-med-mine-og-eksplosivrydding/ukraina"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        <br /><br />
        Gi din støtte til Norsk Folkehjelp&nbsp;
        <Link
          href="https://folkehjelp.no/"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        </p>
      </div>
      <div className="blueBox colorBox">
        <strong>Kirkens nødhjelp</strong><br />
        <p className="mobileHidden tabletHidden">
        Kirkens nødhjelps arbeid i Ukraina
          &nbsp;
        <Link
          href="https://www.kirkensnodhjelp.no/her-jobber-vi/ukraina"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        <br /><br />
        Gi din støtte til Kirkens nødhjelp&nbsp;
        <Link
          href="https://www.kirkensnodhjelp.no/gi-engangsdonasjon"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        </p>
      </div>
      <div className="yBox colorBox">
        <strong>SOS Barnebyer</strong><br />
        <p className="mobileHidden tabletHidden">
        SOS barnebyers arbeid i Ukraina
          &nbsp;
        <Link
          href="https://www.sos-barnebyer.no/her-jobber-vi/europe/ukraine/"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        <br /><br />
        Gi din støtte til SOS barnebyer&nbsp;
        <Link
          href="https://www.sos-barnebyer.no/stott-barna/"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <br />Klikk her
          </a>
        </Link>
        </p>
        </div>
    </div>
  </div>
};

export default Join;