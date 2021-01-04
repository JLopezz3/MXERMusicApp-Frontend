import React from "react";
import "./Home.css";
import HomeBG from "../../assets/Home.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {},
  text: {
    position: "relative",
    justifyContent: "center",
    paddingTop: "20px",
    textAlignn: "center",
  },
  header: {
    color: "#FA9232",
    fontFamily: "Bungee Inline",
    textAlign: "center",
  },
  searchMusicGrid: {
    backgroundColor: "#C4C4C4",
    marginTop: theme.spacing(2),
    width: "100%",
    height: "100%",
    opacity: "0.8",
  },
  searchMusic: {
    backgroundColor: "#F3DCC6",
    margin: theme.spacing(2),
    width: "40%",
    fontFamily: "Bebas Neue",
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
      <React.Fragment>
        <Grid
          style={background.imageUrl}
          container
          xs={12}
          className={classes.root}
          component="main"
          direction="column"
        >
          <div className={classes.text}>
            <Grid item xs={12}>
              <Typography className={classes.header} variant="h2">
                BROWSE MUSIC NOW
              </Typography>
            </Grid>
          </div>
          <div>
            <Grid item xs={12} className={classes.searchMusicGrid}>
              <OutlinedInput
                className={classes.searchMusic}
                placeholder="ENTER A TITLE, ARTIST, OR GENRE"
                // onKeyDown={handleKeyword}
                // onChange={(e) => {
                //   setSearchInput({ ...searchInput, keywords: e.target.value });
                //   console.log(searchInput);
                // }}
                endAdornment={
                  <InputAdornment position="end">
                    <Button size="large" fullWidth={true}>
                      <SearchIcon
                        className={classes.searchButton}
                        aria-label="toggle password visibility"
                        // onClick={handleClickSearch}
                      ></SearchIcon>
                    </Button>
                  </InputAdornment>
                }
              />
            </Grid>
          </div>
        </Grid>
      </React.Fragment>
    </div>
  );
}
