import React from "react";
import {
  Avatar,
  Backdrop,
  Button,
  Fade,
  LinearProgress,
  Modal,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Close, Image, YouTube } from "@mui/icons-material";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { postArticleAPI } from "../features/user/userSlice.js";
import firebase from "firebase";
import { setLoading } from "../features/user/articleSlice.js";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "1px solid rgb(0, 0, 0, 0.6)",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

function PostModal(props) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [videoVisible, setVideoVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.article.loading);

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is type of ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const postArticle = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    console.log('set loading true')
    dispatch(postArticleAPI(payload));
    console.log('set loading false')
    setTimeout(() => {
      props.handleClose();
      setEditorText("");
      setShareImage("");
      setVideoLink("");
      setVideoVisible(false);
      dispatch(setLoading(false));
   }, 5000)
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Header>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Create a Post
              </Typography>
              <Close
                onClick={!loading ? props.handleClose : ()=>{ }}
                style={{ cursor: "pointer" }}
              />
            </Header>
            {
              loading &&
              <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
            }
            <UserInfo>
              <Avatar
                alt="Remy Sharp"
                src={user?.photoURL}
                sx={{ width: 36, height: 36, mr: 1 }}
              />
              <span> {user?.displayName}</span>
            </UserInfo>

            <TextArea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What do you want to talk about?"
            />

            <UploadImage>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                name="image"
                id="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              {shareImage && <img src={URL.createObjectURL(shareImage)} />}

              {videoVisible && (
                <input
                  type="text"
                  placeholder="Please input a vdeo Link"
                  value={videoLink}
                  style={{ width: "100%", outline: "none" }}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              )}
              {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
            </UploadImage>

            <ShareCreation>
              <AssetButton>
                <label htmlFor="file">
                  <Image
                    onClick={() => {
                      setVideoVisible(false);
                      setVideoLink("");
                    }}
                  />
                </label>
                <YouTube
                  onClick={() => {
                    setVideoVisible(true);
                    setShareImage("");
                  }}
                />
              </AssetButton>
              <AssetButton>
                <Button
                  variant="contained"
                  style={{ borderRadius: "30px" }}
                  size="small"
                  disabled={(!editorText || loading) ? true : false}
                  onClick={(e) => {postArticle(e)}}
                >
                  Post
                </Button>
              </AssetButton>
            </ShareCreation>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default PostModal;

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "10px",
  borderBottom: "1px solid rgb(0, 0, 0, 0.2)",
}));
const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "15px",
}));
const ShareCreation = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));
const AssetButton = styled("div")(({ theme }) => ({
  "& > *": {
    cursor: "pointer",
    marginRight: "10px",
  },
  display: "flex",
  alignItems: "center",
  color: "rgb(0, 0, 0, 0.4)",
}));
const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  minHeight: "50px",
  fontSize: "16px",
  padding: "5px",
  resize: "none",
  margin: "10px 0",
  border: "none",
  outline: "none",
}));

const UploadImage = styled("div")(({ theme }) => ({
  "& img": {
    width: "100%",
  },
}));
