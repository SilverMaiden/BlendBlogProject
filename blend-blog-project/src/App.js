import logo from './logo.svg';
import './App.css';
import Home from './components/Home.tsx';
import FormikForm from './components/SignUp.tsx';
import FormikUserForm from './components/LogIn.tsx';

import LogIn from './components/LogIn.tsx';
import PrivateRoute from './components/PrivateRoute';
import { useHistory } from "react-router-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";



function App() {
  const history = useHistory();
  return (
    <Router>
    <div className="App">
      <br  />
      <Switch>
        <Route exact path="/" component={FormikForm} props={history} />
        <Route exact path="/login" component={FormikUserForm} props={history} />
        <PrivateRoute exact path='/home' component={Home} props={history}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
