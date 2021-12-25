import React from "react";
import { Box, Avatar, Typography, Card } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "../images/mileage.gif";
const Count = () => {
  return (
    <Box style={{ width: "100%", height: 300, marginTop: 150 }}>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Card
          elevation={5}
          style={{
            height: 180,
            width: 220,

            marginTop: 150,
            margin: 10,
          }}
        >
          <Avatar
            src={Image}
            style={{
              height: 150,
              width: 150,
              marginLeft: "15%",
              marginTop: -15,
            }}
          ></Avatar>

          <Typography
            variant="h4"
            style={{ marginLeft: "30%", marginTop: -25 }}
          >
            156K
          </Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "30%" }}>
            Happy User
          </Typography>
        </Card>

        <Card
          elevation={5}
          style={{
            height: 180,
            width: 220,

            marginTop: 150,
            margin: 10,
          }}
        >
          <Avatar
            src={Image}
            style={{
              height: 150,
              width: 150,
              marginLeft: "15%",
              marginTop: -15,
            }}
          ></Avatar>

          <Typography
            variant="h4"
            style={{ marginLeft: "30%", marginTop: -25 }}
          >
            156K
          </Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "30%" }}>
            Happy User
          </Typography>
        </Card>

        <Card
          elevation={5}
          style={{
            height: 180,
            width: 220,

            marginTop: 150,
            margin: 10,
          }}
        >
          <Avatar
            src={Image}
            style={{
              height: 150,
              width: 150,
              marginLeft: "15%",
              marginTop: -15,
            }}
          ></Avatar>

          <Typography
            variant="h4"
            style={{ marginLeft: "30%", marginTop: -25 }}
          >
            156K
          </Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "30%" }}>
            Happy User
          </Typography>
        </Card>

        <Card
          elevation={5}
          style={{
            height: 180,
            width: 220,

            marginTop: 150,
            margin: 10,
          }}
        >
          <Avatar
            src={Image}
            style={{
              height: 150,
              width: 150,
              marginLeft: "15%",
              marginTop: -15,
            }}
          ></Avatar>

          <Typography
            variant="h4"
            style={{ marginLeft: "30%", marginTop: -25 }}
          >
            156K
          </Typography>
          <Typography variant="subtitle1" style={{ marginLeft: "30%" }}>
            Happy User
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Count;
