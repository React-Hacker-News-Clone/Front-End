import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./LoginForm.css";

firebase.initializeApp({
  apiKey: "AIzaSyCM3KbpAkmHXE3wIy3Int2ANC3WvrhPbZc",
  authDomain: "hackernews-socials.firebaseapp.com",
  databaseURL: "https://hackernews-socials.firebaseio.com",
  projectId: "hackernews-socials",
  storageBucket: "",
  messagingSenderId: "309281025751",
  appId: "1:309281025751:web:ad9fd735930885e905ca92",
  measurementId: "G-D7SGF8KTRQ"
});

const LoginForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
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
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
  }, []);
  return (
    <>
      <Form className="login-form">
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button>Log In</button>
      </Form>
      <div className="App">
        {isSignedIn ? (
          <>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img src={firebase.auth().currentUser.photoURL} alt="Profile Url" />
          </>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
      \
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(LoginForm);

export default FormikLoginForm;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
