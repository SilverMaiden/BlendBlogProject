import React, { useContext } from 'react';
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
  //const { token } = useContext(AppContext);
  const token = window.localStorage.getItem("token");
  console.log(token)
  return (
    <Route
      {...routeProps}
      render={(props) =>
        token ? <Component props={props} /> : <Redirect to={'/login'} />
      }
    />
  );
};

export default PrivateRoute;