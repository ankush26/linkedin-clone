import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { PhotoSizeSelectActualOutlined, MoreVert } from "@mui/icons-material/";
const Input = styled("input")(({ theme }) => ({
  boxSizing: "border-box",
  border: "1px solid grey",
  outline: "none",
  width: "100%",
  padding: "10px",
  borderRadius: "20px",
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  background: "white",
  border: "1px solid rgb(0, 0, 0, 0.1)",
  padding: "12px",
  borderRadius: "8px",
  marginBottom: "10px",
}));

function Main() {
  return (
    <>
      <GridStyle container alignItems="center" justify="center">
        <Grid item xs={1}>
          <Avatar>H</Avatar>
        </Grid>
        <Grid item xs={11}>
          <Input type="text" placeholder="Start a post"></Input>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Photo
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Video
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Event
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none", fontSize: "12px" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Write article
          </Button>
        </Grid>
      </GridStyle>
        <Card style={{textAlign:'left', marginBottom:'10px'}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'secondary' }} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert/>
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            image="/images/food.jpg"
            alt="Paella dish"
          />
          <CardContent style={{padding:'0px 10px', marginTop:'4px'}}>
            1
          </CardContent>
          <CardActions disableSpacing>
            <Grid container style={{borderTop:'1px solid rgb(0,0,0,0.1)'}}>
            <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Photo
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Video
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Event
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none" }}
            startIcon={
              <PhotoSizeSelectActualOutlined style={{ color: "blue" }} />
            }
          >
            Write 
          </Button>
        </Grid>
            </Grid>
          </CardActions>
        </Card>
    </>
  );
}

export default Main;
