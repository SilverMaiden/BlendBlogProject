import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import dotenv from "dotenv";
dotenv.config();

type PrivateRouteProps = {
  path: RouteProps['path'];
  component: React.ElementType;
};
const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...routeProps
}) => {
  const tokenPresent  = useSelector((state: any) => state.userReducer.tokenPresent)
  //const { token } = useContext(AppContext);
  //const token = window.localStorage.getItem("token");
  console.log(tokenPresent)
  return (
    <Route
      {...routeProps}
      render={(props) =>
        tokenPresent ? <Component props={props} /> : <Redirect to={'/login'} />
      }
    />
  );
};

export default PrivateRoute;