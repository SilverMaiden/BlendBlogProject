import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FormikForm from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
  {...rest}
  render={props =>
    localStorage.getItem("token") ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  }
/>
);


function App() {
  return (
    <Router>
    <div className="App">
      <br  />
      <Switch>
        <Route path="/" component={FormikForm} />
        <PrivateRoute exact path='/home' component={Home} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
