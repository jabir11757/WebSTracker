import React from "react";
import { Box, Typography, Divider } from "@mui/material";
//
const Footer = () => {
  return (
    <Box
      id="contact"
      display="flex"
      flexDirection="column"
      className="shape-top"
      style={{ overflow: "hidden", height: 300, marginTop: -60 }}
    >
      <Box style={{ overflow: "hidden" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F18905"
            fill-opacity="0.9"
            d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,96C672,117,768,139,864,154.7C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>

      <Box style={{ marginLeft: 30, marginTop: "-20vh" }}>
        <Typography variant="h4" style={{ color: "black" }}>
          Sultan Tracker
        </Typography>
        <Box display="flex" className="social-icons"></Box>
      </Box>
      <Box display="flex" flexDirection="row-reverse">
        <Box
          display="flex"
          flexDirection="column"
          style={{ marginTop: "-10vh", marginRight: 55 }}
        >
          <Typography style={{ color: "black", marginTop: 20 }}>
            House No: 242/2, Shah Ali Bagh
          </Typography>

          <Typography style={{ color: "black" }}>+8801313343311</Typography>
        </Box>
      </Box>

      <Divider style={{ backgroundColor: "white", marginTop: 50 }} />

      <Typography
        variant="subtitle1"
        style={{ color: "whitesmoke", marginLeft: 450 }}
      >
        &#169;Copyrights 2022 Sultan Tracker All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
