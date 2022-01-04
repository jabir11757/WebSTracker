import { Box,Card, Button, Typography,IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import "./header.css";
import CityDriver from "../images/City_driver.svg"
import { Instagram } from "@mui/icons-material";
const Header = () => {
  return (
    <Box
      id="marginTop"
      display="flex"
      flexDirection="column"
      className="header"
      style={{ overflow: "hidden", height: "97vh" }}
    >
      <Box style={{ width: "100%", height: 614, overflow: "hidden",backgroundColor:"white" }}>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{ overflow: "hidden", marginTop: "-150vh", marginLeft: 60 }}
      >
        <Typography variant="h3" style={{ color: "black", marginTop: 150 }}>
          Best Vehicle Tracking <br />
          Service In Bangladesh
        </Typography>
        <Typography variant="h5" style={{ color: "black", marginTop: 20 }}>
          For Individual And Corporate
        </Typography>

              <Card display="flex" flexDirection="row" style={{marginLeft:-10}}>
                <Button style={{height:40,width:150, backgroundColor:"black",borderRadius: 20, margin:10, marginTop:30,color:"white"}}>About Us</Button>
                <Button style={{height:40,width:250, backgroundColor:"black",borderRadius: 20, margin:10, marginTop:30,color:"white"}}>Apply For Dealership</Button>
             </Card>

      </Box>

      <Box display="flex" flexDirection="row" style={{marginTop:-190, marginLeft:60}}>
          <Box >
              <IconButton className="Card" style={{margin:0, color: 'black'}} href="https://www.facebook.com/sultanvts/">
                <FacebookIcon />
              </IconButton>
                    
          </Box>

          <Box >
              <IconButton className="Card" style={{margin:0, color: 'black'}}>
                <Instagram/>
              </IconButton>
          </Box>
      </Box>
      

      <Box
        className="Welcome"
        display="flex"
        flexDirection="row-reverse"
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          marginTop: "-100vh",
        }}
      >
        <img
          src={CityDriver}
          alt="hello"
          style={{
            overflow: "hidden",
            maxHeight: 500,
            marginRight: 0,
            marginTop: 30,
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;