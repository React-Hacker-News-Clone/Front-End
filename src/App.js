import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Routes from "./utils/Routes";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyCM3KbpAkmHXE3wIy3Int2ANC3WvrhPbZc",
    authDomain: "hackernews-socials.firebaseapp.com",
    databaseURL: "https://hackernews-socials.firebaseio.com",
    projectId: "hackernews-socials",
    storageBucket: "",
    messagingSenderId: "309281025751",
    appId: "1:309281025751:web:ad9fd735930885e905ca92",
    measurementId: "G-D7SGF8KTRQ"
})

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
  }, [])
  return (
      <div className="App">
        <Routes />
        {isSignedIn ? <div>Signed In!</div>:
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />}
      </div>
  );
}

export default App;
