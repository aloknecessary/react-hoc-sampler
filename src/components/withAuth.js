// withAuth.js
//Author: Alok Ranjan Daftuar
//
import React from "react";
export function withAuth(Component) {
  return class AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      return this.props.isAuthenticated;
    }

    render() {
      const loginErrorMessage = (
        <div>
          Please <a href="/login">login</a> in order to view this part of the
          application.
        </div>
      );

      return (
        <div>
          {this.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

export default withAuth;
