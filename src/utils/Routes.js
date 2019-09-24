import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch, Route } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import FormikRegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Stories from "../components/Stories/Stories";
import StoryPostForm from "../components/StoryPostForm/StoryPostForm";
import Navigation from "../components/Navigation/Navigation";

const Routes = () => {
  return (
    <div>
      {/* Create All Routes here */}
      <Route path="/" component={Navigation} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={FormikRegistrationForm} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/post-story" component={StoryPostForm} />
    </div>
  );
};

export default Routes;
