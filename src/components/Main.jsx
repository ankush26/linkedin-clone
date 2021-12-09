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
import React, { useEffect, useState } from "react";
import { PhotoSizeSelectActualOutlined, MoreVert, YouTube, Event, Article, ArticleSharp, ThumbUpOutlined, CommentOutlined, ShareOutlined, Send } from "@mui/icons-material/";
import PostModal from "./PostModal";
import db from "../firebase.js";
import ReactPlayer from "react-player";
function Main() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [articles, serArticles] = useState([]);
  useEffect(() => {
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        serArticles(snapshot.docs.map((doc) => doc.data()));
      });
    console.log(articles);
  }, []);

  return (
    <div style={{height: '80vh', overflowY:'auto'}}>
      <GridStyle container alignItems="center" justify="center">
        <Grid item xs={1}>
          <Avatar>H</Avatar>
        </Grid>
        <Grid item xs={11}>
          <Input
            onClick={handleOpen}
            type="text"
            placeholder="Start a post"
          ></Input>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none", textTransform: "capitalize"}}
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
            style={{ color: "grey", border: "none", textTransform: "capitalize" }}
            startIcon={
              <YouTube style={{ color: "green" }} />
            }
          >
            Video
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none", textTransform: "capitalize" }}
            startIcon={
              <Event style={{ color: "orange" }} />
            }
          >
            Event
          </Button>
        </Grid>
        <Grid item xs={3} mt={1}>
          <Button
            variant="outlined"
            style={{ color: "grey", border: "none", fontSize: "13px", textTransform: "capitalize" }}
            startIcon={
              <ArticleSharp style={{ color: "pink" }} />
            }
          >
            Write article
          </Button>
        </Grid>
      </GridStyle>
      {articles.map((article, key) => (
        <Card key={key} style={{ textAlign: "left", marginBottom: "10px" }}>
          <CardHeader
            avatar={
              <Avatar
                alt="Remy Sharp"
                src={article.actor.image}
                sx={{ width: 34, height: 34 }}
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={article.actor.title}
            subheader={article.actor.date.toDate().toLocaleDateString()}
          />
          <CardContent style={{ marginTop: "-20px" }}>
            {article.description}
          </CardContent>
          {!article.sharedImg && article.video ? (
            <ReactPlayer width={"100%"} url={article.video} />
          ) : (
            article.sharedImg && (
              <CardMedia
                component="img"
                image={article.sharedImg}
                alt="Paella dish"
              />
            )
          )}
          <CardContent style={{ padding: "0px 10px", marginTop: "4px" }}>
      
          </CardContent>
          <CardActions disableSpacing>
            <Grid container style={{ borderTop: "1px solid rgb(0,0,0,0.1)" }}>
              <Grid item xs={3} mt={1}>
                <Button
                  variant="outlined"
                  style={{ color: "grey", border: "none", textTransform: "capitalize" }}
                  startIcon={
                    <ThumbUpOutlined/>
                  }
                >
                  Like
                </Button>
              </Grid>
              <Grid item xs={3} mt={1}>
                <Button
                  variant="outlined"
                  style={{ color: "grey", border: "none", textTransform: "capitalize" }}
                  startIcon={
                    <CommentOutlined />
                  }
                >
                  Comment
                </Button>
              </Grid>
              <Grid item xs={3} mt={1}>
                <Button
                  variant="outlined"
                  style={{ color: "grey", border: "none", textTransform: "capitalize" }}
                  startIcon={
                    <ShareOutlined/>
                  }
                >
                  Share
                </Button>
              </Grid>
              <Grid item xs={3} mt={1}>
                <Button
                  variant="outlined"
                  style={{ color: "grey", border: "none", textTransform: "capitalize" }}
                  startIcon={
                    <Send/>
                  }
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ))}
      <PostModal handleClose={handleClose} open={open} />
    </div>
  );
}

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

export default Main;
