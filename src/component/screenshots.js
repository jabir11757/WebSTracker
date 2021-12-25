import React, { useState } from "react";
import { Typography,Divider } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slide0 from "../images/bg2.png";
import Slide1 from "../images/bg2.png";
import Slide2 from "../images/bg2.png";
import Slide3 from "../images/bg2.png";
import Slide4 from "../images/bg2.png";
import Slide5 from "../images/bg2.png";
import Slide6 from "../images/bg2.png";
import Slide7 from "../images/bg2.png";
import Slide8 from "../images/bg2.png";
import Slide9 from "../images/bg2.png";
import Slide10 from "../images/bg2.png";
import Slide11 from "../images/bg2.png";
import Slide12 from "../images/bg2.png";
import Slide13 from "../images/bg2.png";
import Slide14 from "../images/bg2.png";
import Slide15 from "../images/bg2.png";
import Slide16 from "../images/bg2.png";
import Slide17 from "../images/bg2.png";

const sliderImagges = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
];

const names = [
  "SignUp",
  "SignIn",
  "Assign Vehicle",
  "Expanded Vehicle list",
  "Map",
  "Map Expanded",
  "On-Off Status",
  "Distance Chart",
  "Distance Expanded",
  "Monthly Report",
  "Monthly Expanded",
  "Driver Profile Update",
  "Side Nav",
  "Payment Guide",
  "Tranacstion",
  "Transaction Summery",
  "Transaction Expanded",
  "Setting",
];

const Screenshot = () => {
  const [name, setName] = useState(names[1]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div
      id="screenshot"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        overflow: "hidden",
      }}
    >
      <Typography variant="h4" style={{ padding: 10 }}>
        {" "}
        ScreenShot
      </Typography>
      <Divider style={{width:"50%",backgroundColor:"black", marginBottom: 20}}/>


      <Typography variant="h6" style={{ padding: 10 }}>
        {name}
      </Typography>

      <div style={{ width: "70%" }}>
        <Slider
          afterChange={(index) =>
            setName((old) => names[(index + 1) % names.length])
          }
          {...settings}
        >
          {sliderImagges.map((img, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={img} alt="screenshots" style={{ height: 500 }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Screenshot;
