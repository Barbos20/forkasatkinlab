import React, { useState } from "react";
import "./Navigation.css";
import LightTheme from "../exportedFiles/LightTheme.svg";
// import { bulb } from "../exportedFiles/bulb.svg";
import MenuButton from "./MenuBatton";

export const Navigation = () => {
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (index) => {
    if (index !== activeButton) {
      animateActiveButton(index);
    }
  };

  const animateActiveButton = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="menu">
      <div className="LightTheme">
        <img src={LightTheme} alt="alt" />
      </div>
      <div className="Navigation">
        <MenuButton
          label="Main Page"
          active={activeButton === 0}
          onClick={() => handleButtonClick(0)}
        />
        <MenuButton
          label="Features"
          active={activeButton === 1}
          onClick={() => handleButtonClick(1)}
        />
        <MenuButton
          label="Soon"
          active={activeButton === 2}
          onClick={() => handleButtonClick(2)}
        />
        <button className="whiteButton">Create Wallet</button>
      </div>
      <div className="Language">
        <h1>EN</h1>
      </div>
    </div>
  );
};
