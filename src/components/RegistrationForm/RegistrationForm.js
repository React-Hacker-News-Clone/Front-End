import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import { ToastContainer } from 'react-toastr';

import "./RegistrationForm.css";

function RegistrationForm(props) {
  return (
    <Form className="register-form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control as={Field} type="text" name="username" />
        <ErrorMessage name="username" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control as={Field} type="password" name="password" />
        <ErrorMessage name="password" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const FormikRegistrationForm = withFormik({
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
  handleSubmit(values, { props }) {
    console.log("inputtted values", values);

    axios
      .post(
        "https://francoiscoding-javabackend.herokuapp.com/registration",
        `grant_type=password&username=${values.username}&password=${values.password}`,
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
})(RegistrationForm);

export default FormikRegistrationForm;

// axios
//     .post(
//       "https://francoiscoding-javabackend.herokuapp.com/registration",
//       `grant_type=password&username=${values.username}&password=${values.password}`,
//       {
//         headers: {
//           Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
//           "Content-Type": "application/x-www-form-urlencoded"
//         }
//       }
//     )
//     .then(res => localStorage.setItem("token", res.data.access_token))
//     .catch(err => console.log(err));
// };
