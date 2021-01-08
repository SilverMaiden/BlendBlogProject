import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';


const PrivateRoute = ({ component, ...rest }: any) => {
  const { token } = useContext(AppContext);
  return (
    <>
  {
    (token: any) => {
      if(token) {
        let newComponent = React.createElement(component, props);
        return( <newComponent />)
      }
      return  <Redirect to={{pathname: '/login'}} />
    }
  }
  </>
  )
  }
export default PrivateRoute;
