import React from "react";
import { withFormik, Form, Field } from "formik";
// import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton,} from "react-social-login-buttons";

function LoginForm() {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Log In</button>
      {/* <FacebookLoginButton onClick={() => alert("Hello")} />
      <GoogleLoginButton onClick={() => alert("Hello")} />
      <TwitterLoginButton onClick={() => alert("Hello")} /> */}
    </Form>
  );
}

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


