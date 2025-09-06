import React from "react";

export default function ListOfMachinePartsBox({img , name}) {
  return (
    <div className="ListOfMachineParts__box">
      <div className="ListOfMachineParts__box__img">
        <img src={img}/>
      </div>
      <div className="ListOfMachineParts__box__text">
        <p> {name} </p>
      </div>
    </div>
  );
}
