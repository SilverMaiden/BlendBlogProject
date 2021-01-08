import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FormikForm from './components/SignUp.tsx';
import LogIn from './components/LogIn.tsx';
import PrivateRoute from './components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <br  />
      <Switch>
        <Route exact path="/" component={FormikForm} />
        <Route exact path="/login" component={LogIn} />
        <PrivateRoute exact path='/home' component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
