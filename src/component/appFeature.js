import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
const AppFeature = () => {
  return (
    <Box style={{ width: "100%", height: 500, backgroundColor: "yellow" }}>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Typography variant="h4">App Features</Typography>
      </Box>
      <Grid xs={4} style={{ width: "100%" }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          style={{ width: "100%" }}
        >
          <Card
            style={{
              height: 120,
              width: "100%",
              backgroundColor: "violet",
              margin: 15,
            }}
          ></Card>
          <Card
            style={{
              height: 120,
              width: "100%",
              backgroundColor: "violet",
              margin: 15,
            }}
          ></Card>
          <Card
            style={{
              height: 120,
              width: "100%",
              backgroundColor: "violet",
              margin: 15,
            }}
          ></Card>
        </Box>
      </Grid>
    </Box>
  );
};

export default AppFeature;
