import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch, Route } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Stories from "../components/Stories/Stories";

const Routes = () => {
  return (
    <div>
      {/* Create All Routes here */}
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route path="/stories" component={Stories} />
      {/* <Route exact path="/register" component={RegistrationForm} /> */}
      <PrivateRoute exact path="/top" component={Stories} />
    </div>
  );
};

export default Routes;
