import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li className="sidenav-close">
        <NavLink to="/">
          <i className="material-icons prefix amber-text hide-on-large-only">
            face
          </i>
          Find Friends
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>
          <i className="material-icons prefix amber-text hide-on-large-only">
            exit_to_app
          </i>
          Sign Out
        </a>
      </li>
      <li className="sidenav-close">
        <NavLink to="/" className="btn btn-floating black hide-on-med-and-down">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
