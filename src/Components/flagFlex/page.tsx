import React from "react";

interface FlagFlexProps {
  text: React.ReactNode;
  flagLeft: string;
  flagRight: string;
}

const FlagFlex: React.FC<FlagFlexProps> = ( { text, flagLeft, flagRight }) => {

  return <div className="flagFlexContainer">
    <div className="flagFlexLeft" style={{backgroundColor: flagLeft}}></div>
    <div className="flagFlexContent">{ text }</div>
    <div className="flagFlexRight" style={{ backgroundColor: flagRight}}></div>
  </div>
};

export default FlagFlex;