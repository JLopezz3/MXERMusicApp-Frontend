import React from "react";
import GetStartedCarousel from "../../components/GetStarted/GetStartedCarousel";
import Swipe from "../../components/Swipe/Swipe";

export default function Dashboard() {
  return (
    <div>
      <p>WELCOME TO MXER! CLICK HERE TO LEARN MORE.</p>
      <GetStartedCarousel />
      <Swipe />
    </div>
  );
}
