import React from "react";
import GetStartedCarousel from "../../components/GetStarted/GetStartedCarousel";
import Swipe from "../../components/Swipe/Swipe";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",
    background: "red"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.top} >WELCOME TO MXER! CLICK HERE TO LEARN MORE.</p>
      <GetStartedCarousel />
      <Swipe />
    </div>
  );
}
