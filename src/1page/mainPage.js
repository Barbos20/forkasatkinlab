import React from "react";
import "./mainPage.css";
import AlphaLogo from "../exported files/AlphaLogo.svg";
import Iphone14Pro from "../exported files/iPhone14Pro.svg";
import LightTheme from "../exported files/LightTheme.svg";
import firstCircle from "../exported files/circle/1first.svg";
import secondCircle from "../exported files/circle/2second.svg";
import thirdCircle from "../exported files/circle/3third.svg";
import fourthCircle from "../exported files/circle/4fourth.svg";
import fifthCircle from "../exported files/circle/5fifth.svg";

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
        <div className="LightTheme">
          <img src={LightTheme} alt="alt" />
        </div>
        <div className="Navigation">
          <p>Main page</p>
          <p>Features</p>
          <p>Soon</p>
          <p>Create Wallet</p>
        </div>
        <div className="Language">
          <h1>EN</h1>
        </div>
      </div>
      <div className="circle">
        {/* <img className="firstCircle" src={firstCircle} alt="alt" />
        <img className="secondCircle" src={secondCircle} alt="alt" />
        <img className="thirdCircle" src={thirdCircle} alt="alt" />
        <img className="fourthCircle" src={fourthCircle} alt="alt" />
        <img className="fifthCircle" src={fifthCircle} alt="alt" /> */}
        <div className="firstCircle" />
        <div className="secondCircle" />
        <div className="thirdCircle" />
        <div className="fourthCircle" />
        <div className="fifthCircle" />
      </div>
    </div>
  );
};
