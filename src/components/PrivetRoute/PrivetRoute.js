import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user}=useAuth()
    return (
        <Route
          {...rest}
          render={({ location }) =>
          ( user.name||user.email) ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/logIn",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    
};

export default PrivetRoute;