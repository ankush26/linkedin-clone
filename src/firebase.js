import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDQTJu4e17O75V6gJcKKx0blfDyCoV0uXQ",
  authDomain: "linkedin-clone-e53d6.firebaseapp.com",
  projectId: "linkedin-clone-e53d6",
  storageBucket: "linkedin-clone-e53d6.appspot.com",
  messagingSenderId: "372855413719",
  appId: "1:372855413719:web:0118ab33a101c4e5418992",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage}
export default db;