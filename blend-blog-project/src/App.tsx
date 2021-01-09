import {useState, useEffect} from "react";
import './App.css';
import Home from './components/Home';
import CreateBlogPost from './components/CreateBlogPost/CreateBlogPost';
import FormikSignUpForm from './components/SignUp';
import FormikLogInForm from './components/forms/FormikLogInForm';
import PrivateRoute from './components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
      <Router>
      <div className="App">
        <br  />
        <Switch>
          <Route exact path="/" component={FormikSignUpForm} />
          <Route exact path="/login" component={FormikLogInForm} />
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/createblogpost' component={CreateBlogPost} />

        </Switch>
      </div>
      </Router>
  );
}

export default App;
