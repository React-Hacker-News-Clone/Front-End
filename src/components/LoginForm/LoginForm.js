import React, { useState, useEffect } from "react";
import { withFormik, Field } from "formik";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Button from "react-bootstrap/Button";
import axios from "axios";
import * as Yup from "yup";
import LoadingScreen from "react-loading-screen";
import {
  CardLogin,
  Title,
  ShortText,
  FormStyle,
  ButtonStyle
} from "../Styles/LoginStyles";

// Initialize Firebase to Connect to Application
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

function LoginForm({ values, errors, touched, isSubmitting, history }) {
  // Create State & Setter Functions
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Time for Loading Screen
  setTimeout(() => {
    setLoading(false);
  }, 900);

  // Firebase Config for Login Features
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => {
        console.log("clicked");
      }
    }
  };

  // Use Effect That Runs on Mount
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      console.log("user info", user);
    });
  }, []);

  return (
    <>
      <CardLogin>
        <Title> Welcome </Title>
        <ShortText>
          {" "}
          To keep connected with us please login with your personal info.
        </ShortText>
        {touched.username && errors.username && <p>{errors.email}</p>}
        <FormStyle>
          <Form.Label>Username</Form.Label>
          <Field type="text" name="username" />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Form.Label>Password</Form.Label>
          <Field type="password" name="password" />
        </FormStyle>
        <ButtonStyle type="submit"> LOGIN</ButtonStyle>
        <ShortText> Or Sign Up Using </ShortText>
        <div className="App">
          {isSignedIn ? (
            <>
              <LoadingScreen
                loading={loading}
                bgColor="#f1f1f1"
                textColor="#676767"
                text={`Welcome ${
                  firebase.auth().currentUser.displayName
                } Loading Hacker News ...`}
                spinnerColor="#9ee5f8"
                logoSrc={firebase.auth().currentUser.photoURL}
              ></LoadingScreen>
            </>
          ) : (
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
        <ShortText>
          Need an account? <a href="/register">Register here</a>.
        </ShortText>
      </CardLogin>
    </>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  // Form Validation
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username field is empty"),
    password: Yup.string().min(6, "Password must be 6 characters or longer")
  }),

  handleSubmit(data, { props }) {
    console.log("inputtted values", data);

    // Axios Request for User to be Authenticated
    axios
      .post(
        "https://francoiscoding-javabackend.herokuapp.com/registration",
        `grant_type=password&username=${data.username}&password=${data.password}`,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => localStorage.setItem("token", res.data.access_token))
      .catch(err => console.log(err));
    props.history.push("/hackernews");
  }
})(LoginForm);

export default FormikLoginForm;
