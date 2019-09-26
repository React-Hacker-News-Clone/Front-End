import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import * as Yup from "yup";
import LoadingScreen from "react-loading-screen";

import { CardLogin, Title, ShortText, FormStyle } from "../Styles/LoginStyles";

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
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 900);

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
        history.push("/hackernews");
      }
    }
  };

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
        <Form>
          <FormStyle>
            <Field type="text" name="username" placeholder="Username" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </FormStyle>
          <FormStyle>
            <Field type="password" name="password" placeholder="Password" />
          </FormStyle>
          <Link to="/hackernews">
            <Button type="submit"> Log In </Button>
          </Link>
        </Form>

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

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username field is empty"),
    password: Yup.string().min(6, "Password must be 6 characters or longer")
  }),

  handleSubmit(data, { props }) {
    console.log("inputtted values", data);

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
