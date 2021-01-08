import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { RouteProps, Route, Redirect } from 'react-router-dom';

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
  return (
    <Route
      {...routeProps}
      render={(props) =>
        token !== "" ? <Component /> : <Redirect to={'/login'} />
      }
    />
  );
};

export default PrivateRoute;