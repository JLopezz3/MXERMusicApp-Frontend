import React from "react";
import SwipeableViews from "react-swipeable-views";

import HomeBG from "../../assets/Home.png";

const styles = {
  slide: {
    padding: 15,
    //
    height: "100vh",
    color: "red",
    textAlign: "center",
  },
  slide1: {
    backgroundColor: "#FEA900",
    backgroundImage: `url(${HomeBG})`,
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

export default function Swipe() {
  return (
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
        <p>CONNECT AND SHARE MUSIC WITH LOCAL ARTISTS</p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
        <p>BROWSE TONS OF MUSIC</p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
        <p>JUMPSTART TOUR MXER PROFILE NOW!</p>
      </div>
    </SwipeableViews>
  );
}
