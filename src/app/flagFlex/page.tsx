import React from "react";
const FlagFlex = ( { text, flagLeft, flagRight }) => {
  return <div className="flagFlexContainer">
    <div className="flagFlexLeft" style={{backgroundColor: flagLeft}}></div>
    <div className="flagFlexContent">{ text }</div>
    <div className="flagFlexRight" style={{ backgroundColor: flagRight}}></div>
  </div>
};



export default FlagFlex;