import React, { useEffect, useRef } from "react";
import "./mainPage.css";
import AlphaLogo from "../exportedFiles/AlphaLogo.svg";
import Iphone14Pro from "../exportedFiles/iPhone14Pro.svg";
import { gsap } from "gsap";
import { TimelineLite } from "gsap/all";

import { Navigation } from "../nav/Navigation";

export const MainPage = () => {
  const mainRef = useRef(null);
  useEffect(() => {
    const timeline = new TimelineLite({ paused: true });
    const logoAnimation = gsap.fromTo(
      ".iphone",
      { opacity: 0, y: 30 },
      { opacity: 1, duration: 1, y: 0 }
    );
    timeline.add(logoAnimation);
    const handleScroll = () => {
      if (!timeline.isActive()) {
        timeline.play();
      }
    };

    window.addEventListener("scroll", handleScroll);

    gsap.fromTo(
      ".logo",
      { opacity: 0, y: 30 },
      { opacity: 1, duration: 1.5, delay: 1, y: 0 }
    );
    gsap.fromTo(
      ".menu",
      { opacity: 0, y: -30 },
      { opacity: 1, duration: 1.5, delay: 1, y: 0 }
    );
    gsap.fromTo(
      ".title h1",
      { opacity: -1, fontSize: 50 },
      { opacity: 1, duration: 1.5, delay: 1, fontSize: 180 }
    );
    gsap.fromTo(
      ".title p",
      { opacity: -1, fontSize: 15 },
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

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className="mainPage" ref={mainRef}>
      <div className="logo">
        <img src={AlphaLogo} alt="alt" />
      </div>

      <div className="title">
        <h1>Alpha Wallet</h1>
        <p>
          Find, swap, and track assets on Telegram without <br />
          leaving the messenger
        </p>
        <img className="iphone" src={Iphone14Pro} alt="alt" />
      </div>
      <Navigation />
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
