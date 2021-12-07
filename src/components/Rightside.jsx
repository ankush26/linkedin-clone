import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const Follow = styled("button")(({ theme }) => ({
  borderRadius: '50px',
  padding: '5px 10px'
}));
function Rightside() {
  return (
      <List sx={{ width: "100%", maxWidth: 360}}>
        <ListItem>
          <h1 style={{color:'grey', fontSize:'20px'}}>Add to your feed</h1>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "blue" }}>#</Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Follow>Follow</Follow>} secondary="#Linkedin" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "blue" }}>#</Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Follow>Follow</Follow>} secondary="#Video" />
        </ListItem>
        <ListItem>
        <a style={{color:'blue'}}> View all recommendations</a>
          <img src="/images/right-icon.svg" alt="" />
        </ListItem>
      </List>
  );
}

export default Rightside;
