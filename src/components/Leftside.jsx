import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const Photo = styled("img")(({ theme }) => ({
  boxShadow: "none",
  width: "70px",
  height: "70px",
  boxSizing: "border-box",
  backgroundClip: "content-box",
  backgroundColor: "white",
  backgroundPosition: "center",
  backgroundSize: "60%",
  backgroundRepeat: "no-repeat",
  border: "2px solid white",
  borderRadius: "50%",
  marginTop: "-38px",
}));

const Widget = styled(Box)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  borderTop: "1px solid grey",
  padding: "15px",
}));

function Leftside() {
  return (
    <Card>
      <Box style={{ alignItem: "center" }}>
        <CardMedia
          component="img"
          height="54"
          image="/images/card-bg.svg"
          alt=""
        />
        <Photo src="/images/photo.svg" />
      </Box>
      <CardContent>
        <h2>Welcome, there!</h2>
        <a style={{ color: "blue", fontSize: "14px" }}>Add a photo</a>
      </CardContent>
      <Widget>
        <Box sx={{ flexGrow: 1 }}>
          <p style={{ fontSize: "15px", color: "rgb(0,0,0,0.7)" }}>
            Connections
          </p>
          <p style={{ fontSize: "15px" }}>Grow your network</p>
        </Box>
        <img src="/images/widget-icon.svg" alt="" />
      </Widget>
      <Widget>
      <img src="/images/item-icon.svg" alt="" />
            <p> My Items</p>
      </Widget>
    </Card>
  );
}

export default Leftside;
