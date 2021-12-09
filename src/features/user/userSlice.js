import { createSlice } from "@reduxjs/toolkit";
import db, { storage } from "../../firebase.js";
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.user = action.payload.user;
    },
    setSignOutState: (state) => {
      state.user = null;
    }, 
    postArticleAPI: (state, action) => {
      console.log("start");
      if (action.payload.image !== "") {
        const upload = storage
          .ref(`images/${action.payload.image.name}`)
          .put(action.payload.image);
        upload.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`progress: ${progress}`)
            if (snapshot.state === "RUNNING") {
              console.log(`progress : ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            db.collection("articles").add({
              actor: {
                description: action.payload.user.email,
                title: action.payload.user.displayName,
                date: action.payload.timestamp,
                image: action.payload.user.photoURL,
              },
              video: action.payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: action.payload.description,
            });
          }
        );
        console.log('if end')
      } else if (action.payload.video) {
        db.collection("articles").add({
          actor: {
            description: action.payload.user.email,
            title: action.payload.user.displayName,
            date: action.payload.timestamp,
            image: action.payload.user.photoURL,
          },
          video: action.payload.video,
          sharedImg: "",
          comments: 0,
          description: action.payload.description,
        });
        console.log('else if end')
      }
      console.log('end')
    },
  },
});

export const { setUserLoginDetails, setSignOutState, postArticleAPI } =
  userSlice.actions;

export default userSlice.reducer;
