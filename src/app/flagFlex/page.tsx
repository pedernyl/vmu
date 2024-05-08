import React from "react";
const FlagFlex = ( { text }) => {
  return <div className="flagFlexContainer">
    <div className="flagFlexBlue"></div>
    <div className="flagFlexContent">{ text }</div>
    <div className="flagFlexOrange"></div>
  </div>
};



export default FlagFlex;