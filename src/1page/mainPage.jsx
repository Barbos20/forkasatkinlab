import React, { useEffect } from "react";
import "./mainPage.css";
import AlphaLogo from "../exported files/AlphaLogo.svg";
import Iphone14Pro from "../exported files/iPhone14Pro.svg";
import LightTheme from "../exported files/LightTheme.svg";
import { gsap } from "gsap";

export const MainPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".logo",
      { opacity: 0, y: 30 },
      { opacity: 1, duration: 1.5, delay: 1, y: 0 }
    );
    gsap.fromTo(
      ".menu",
      { opacity: 0, y: 30 },
      { opacity: 1, duration: 1.5, delay: 1, y: 0 }
    );
    gsap.fromTo(
      ".title h1",
      { opacity: -1, fontSize: 50 },
      { opacity: 1, duration: 1.5, delay: 1, fontSize: 180 }
    );
    gsap.fromTo(
      ".title p",
      { opacity: -1, fontSize: 0 },
      { opacity: 1, duration: 1, delay: 1.5, fontSize: 20.5 }
    );
    gsap.fromTo(
      ".firstCircle",
      { height: 0, width: 0 },
      { width: 470.913, height: 470.913, duration: 2, delay: 0.9 }
    );
    gsap.fromTo(
      ".secondCircle",
      { height: 0, width: 0 },
      { width: 642.011, height: 642.011, duration: 2, delay: 0.8 }
    );
    gsap.fromTo(
      ".thirdCircle",
      { height: 0, width: 0 },
      { width: 776.754, height: 776.754, duration: 2, delay: 0.7 }
    );
    gsap.fromTo(
      ".fourthCircle",
      { height: 0, width: 0 },
      { width: 919.423, height: 919.423, duration: 2, delay: 0.6 }
    );
    gsap.fromTo(
      ".fifthCircle",
      { height: 0, width: 0 },
      { width: 1072, height: 1072, duration: 2, delay: 0.5 }
    );
  }, []);

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
        <div className="firstCircle" />
        <div className="secondCircle" />
        <div className="thirdCircle" />
        <div className="fourthCircle" />
        <div className="fifthCircle" />
      </div>
    </div>
  );
};
