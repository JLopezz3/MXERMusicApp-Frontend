import React, { useState } from "react";

// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#202020",
    background: "#FA9232",
    fontFamily: "Bungee Inline",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "rgb(176 113 41)",
    },
    borderRadius: 10,
    width: "100%",
    margin: theme.spacing(1)
  },
}));

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {

  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img
              alt=""
              src="http://www.icons101.com/icons/64/musical_collectiontarkeenART_by_tarkeenART/128/Music%20[2].png"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="Share and discover music with other artists"
          subtitle="Search a wide range of music"
        />
        <Slide
          media={
            <img
              alt=""
              src="http://www.icons101.com/icons/64/musical_collectiontarkeenART_by_tarkeenART/128/OST%20[2].png"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          media={
            <img
              alt=""
              src="http://www.icons101.com/icons/64/musical_collectiontarkeenART_by_tarkeenART/128/Singer.png"
            />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default function GetStartedCarousel() {
  const classes = useStyles();
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Button className={classes.button} onClick={handleClick}>Get Started</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </div>
  );
}
