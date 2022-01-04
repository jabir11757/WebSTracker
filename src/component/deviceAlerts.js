import React, { useState } from "react";
import { Avatar, Grid, Box, Typography, Card, IconButton } from "@mui/material";
import { DeviceAlertsData } from "./data";

const DeviceAlerts = () => {
  const [Data, setData] = useState();
  return (
      <Box display="flex" flexDirection="column" alignItems="center" style={{marginTop:50}}>
          <Typography variant="h4">Device Provided Alerts</Typography>
    <Box
      display="flex"
      flexDirection="row"
      style={{ margin: 10, marginTop: 50 }}
    >
        
      <Box style={{ maxWidth: "50%", minWidth: "50%", margin: 10 }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {DeviceAlertsData.map((item, index) => {
            return (
              <Grid key={index} item xs={2.4}>
                <Card style={{ height: "100%", width: "100%" }}>
                 
                    <Box>
                    <IconButton style={{marginLeft:27}} onClick={() => setData(item.description)}>
                      <Avatar
                        style={{
                          height: 40,
                          width: 40,
                        }}
                        src={item.image}
                      ></Avatar>
                      </IconButton>
                      <Typography
                        style={{
                          marginLeft: 15,
                          fontSize: 10,
                          fontWeight: "bold",
                          marginTop: 5,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        style={{ margin: 50 }}
      >
    
        {Data != null ? (
          Data
        ) : (
          <Typography variant="h6">
            Milage Report is simply dummy text of the printing industry. Lorem
            Ipsum has been the industry's standard ever since the 1500s, when an
            unknown printer took and scrambled it to make a type specimen book.
            It ha only five centuries, but also the leap into ele remaining
            essentially unchanged. It was p with the release of Letraset sheets
            containing and more recently with desktop publishing
          </Typography>
        )}
      </Box>
    </Box>
    </Box>
  );
};

export default DeviceAlerts;
