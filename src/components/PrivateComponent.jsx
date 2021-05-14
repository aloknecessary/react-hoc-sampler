// PrivateComponent.jsx
// Author: Alok Ranjan Daftuar
//
import React from "react";
import { withAuth } from "./withAuth.js";

export class PrivateComponent extends React.Component {
  render() {
    return <div>Accessible only to authenticated users.</div>;
  }
}

// Now wrap PrivateComponent with the requireAuthentication function

export default withAuth(PrivateComponent);
