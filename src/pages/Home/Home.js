import React from "react";
import "./Home.css";
import HomeBG from "../../assets/Home.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography} from "@material-ui/core";

import GetStartedCarousel from "../../components/GetStarted/GetStartedCarousel";

const useStyles = makeStyles((theme) => ({
  root: {},
  text: {
    position: "relative",
    justifyContent: "center",
    paddingTop: "20px",
    textAlignn: "center",
  },
  titleGrid: {
    marginTop: theme.spacing(4)
  },
  header: {
    color: "#FA9232",
    fontFamily: "Bungee Inline",
    textAlign: "center",
  },
  getStarted: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4)
  },
}));

export default function Home() {
  const classes = useStyles();
  const background = {
    imageUrl: {
      backgroundImage: `url(${HomeBG})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "900px 600px",
      backgroundPosition: "right bottom",
      height: "100vh",
      width: "100vw",
    },
  };

  return (
    <div>
        <Grid
          style={background.imageUrl}
          container
          className={classes.root}
          component="main"
          direction="column"
          alignItems="center"
        >
          <div className={classes.text}>
            <Grid item xs={12} className={classes.titleGrid}>
              <Typography className={classes.header} variant="h2">
                BROWSE MUSIC NOW
              </Typography>
            </Grid>
            <Grid item className={classes.getStarted}>
              <GetStartedCarousel />
            </Grid>
          </div>
        </Grid>
    </div>
  );
}
