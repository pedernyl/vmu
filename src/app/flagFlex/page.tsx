import React from "react";
const FlagFlex = ( { text, flagLeft }) => {
  return <div className="flagFlexContainer">
    <div className="flagFlexBlue" style={{backgroundColor: flagLeft}}></div>
    <div className="flagFlexContent">{ text }</div>
    <div className="flagFlexOrange"></div>
  </div>
};



export default FlagFlex;