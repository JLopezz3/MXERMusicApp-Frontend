import React from "react";
import "./HeaderTwo.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#202020",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Bungee Inline",
  },
  signUp: {
    color: "#FA9232",
    background: "#F3DCC6",
    fontFamily: "Bungee Inline",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "rgb(176 113 41)",
    },
    borderRadius: 10,
    width: 100,
    margin: theme.spacing(1),
  },
  logIn: {
    color: "#202020",
    background: "#FA9232",
    fontFamily: "Bungee Inline",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "rgb(176 113 41)",
    },
    borderRadius: 10,
    width: 100,
    margin: theme.spacing(1),
  },
}));

export default function HeaderTwo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link href="/" style={{ textDecoration: "none", color: "#FA9232" }}>
              MXER
            </Link>
          </Typography>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button className={classes.logIn}>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
