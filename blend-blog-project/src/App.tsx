import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import CreateBlogPost from "./components/CreateBlogPost/CreateBlogPost";
import ViewUserPosts from "./components/ViewUserPosts";
import FormikRegisterForm from "./components/Register/FormikRegisterForm";
import ConnectedEditPostForm from "./components/EditBlogPost/FormikEditPostForm";

import BlogPost from "./components/Blog/BlogPost";
import FormikLogInForm from "./components/LogIn/FormikLogInForm";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <br />
        <Switch>
          <Route exact path="/" component={FormikRegisterForm} />
          <Route exact path="/login" component={FormikLogInForm} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/createblogpost" component={CreateBlogPost} />
          <PrivateRoute path="/myposts" component={ViewUserPosts} />
          <PrivateRoute path="/blog/:id" component={BlogPost} />
          <PrivateRoute path="/edit/:id" component={ConnectedEditPostForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
