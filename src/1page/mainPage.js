import React from "react";
import "./mainPage.css";
import AlphaLogo from "../exported files/AlphaLogo.svg";
import Iphone14Pro from "../exported files/iPhone14Pro.svg";

export const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="logo">
        <img src={AlphaLogo} alt="alt" />
      </div>

      <div className="title">
        <h1>Alpha Wallet</h1>
        <p>
          Find, swap, and track assets on Telegram without <br />
          leaving the messenger
        </p>
        {/* <img src={Iphone14Pro} alt="alt" /> */}
      </div>
      <div className="menu">
        <div className="LightTheme"></div>
        <div className="Navigation"></div>
        <div className="Language"></div>
      </div>
    </div>
  );
};
