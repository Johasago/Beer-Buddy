import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li className="sidenav-close">
        <NavLink to="/signin">
          <i className="medium material-icons prefix amber-text hide-on-large-only">
            local_drink
          </i>
          Sign In
        </NavLink>
      </li>
      <li className="sidenav-close">
        <i className="material-icons prefix amber-text hide-on-large-only	">
          edit
        </i>
        <NavLink to="/signup">
          Sign Up{" "}
          <i className="material-icons prefix hide-on-large-only">edit</i>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
