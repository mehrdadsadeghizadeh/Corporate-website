import React from "react";

function MachineryInformationBox({ img, title, text }) {
  return (
    <div className="IntroductionOfMachines-box" >
      <div className="IntroductionOfMachines-img">
        <img src={img} alt="product" />
      </div>
      <div className="IntroductionOfMachines-text">
        <h4 className="IntroductionOfMachines-title">{title}</h4>
        <p className="IntroductionOfMachines-heder">{text}</p>
      </div>
    </div>
  );
}

export default MachineryInformationBox;
