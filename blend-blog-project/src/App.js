import './App.css';
import Home from './components/Home.tsx';
import FormikSignUpForm from './components/SignUp.tsx';
import FormikLogInForm from './components/LogIn.tsx';
import PrivateRoute from './components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//window.localStorage.setItem("token", "");

function App() {
  return (
    <Router>
    <div className="App">
      <br  />
      <Switch>
        <Route exact path="/" component={FormikSignUpForm} />
        <Route exact path="/login" component={FormikLogInForm} />
        <PrivateRoute exact path='/home' component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
