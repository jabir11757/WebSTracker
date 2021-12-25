import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Typography, Card, Icon, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { grey, yellow } from "@mui/material/colors";

import { TeamData } from "./data";
import "./team.css";
export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div
        id="marginTop"
        style={{
          width: 1000,
          height: 500,
          overflow: "hidden",
          padding: 20,
          marginLeft: "12%",
        }}
      >
        <Typography style={{ marginLeft: 350, marginBottom: 10 }} variant="h4">
          Meet Our Team
        </Typography>
        <Divider
          style={{
            width: "50%",
            backgroundColor: "black",
            marginBottom: 20,
            marginLeft: 220,
          }}
        />

        <Slider {...settings}>
          {TeamData.map((item, index) => {
            return (
              <div>
                <Card
                  elevation={5}
                  key={index}
                  style={{
                    height: 350,
                    width: 250,
                    margin: 10,
                    backgroundColor:  yellow[900],
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <img
                      src={item.image}
                      alt="team"
                      style={{
                        borderRadius: 0,
                        margin: 10,
                        marginTop: 0,
                        width: 250,
                        height: 220,
                      }}
                    ></img>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color:'white',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ textAlign: "center", marginTop: -5, color:'white' }}
                    >
                      {item.post}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    style={{marginTop:15}}
                  >
                    <Icon className="Card" style={{margin:6, color: 'white'}}>
                      <FacebookIcon />
                    </Icon>
                    <Icon className="Card" style={{margin:6, color: 'white'}}>
                      <EmailIcon />
                    </Icon>
                    <Icon className="Card" style={{margin:6, color: 'white'}}>
                      <GitHubIcon />
                    </Icon>
                    <Icon className="Card" style={{margin:6, color: 'white'}}>
                      <PhoneIphoneIcon />
                    </Icon>
                  </Box>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
