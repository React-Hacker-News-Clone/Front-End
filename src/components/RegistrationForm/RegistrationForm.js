import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import { ToastContainer } from 'react-toastr';

import "./RegistrationForm.css";

const postUrl = "https://francoiscoding-javabackend.herokuapp.com/registration";
function RegistrationForm(props) {
  return (
    <Form className="register-form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control as={Field} type="name" name="name" />
        <ErrorMessage name="name" />
      </Form.Group>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control as={Field} type="username" name="username" />
        <ErrorMessage name="username" />
      </Form.Group>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Email</Form.Label>
        <Form.Control as={Field} type="email" name="email" />
        <ErrorMessage name="email" />
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
  mapPropsToValues({ name, username, email, password }) {
    return {
      name: name || "",
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name field is empty"),
    username: Yup.string().required("Please pick a username"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email field is empty"),
    password: Yup.string().min(6, "Password must be 6 characters or longer")
  }),
  handleSubmit(values, { props }) {
    props.history.push("/stories");

    axiosWithAuth()
      .post(postUrl, values)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  }
})(RegistrationForm);

export default FormikRegistrationForm;
