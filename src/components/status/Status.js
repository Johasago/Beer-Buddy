import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./status.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Status extends Component {
  componentDidMount() {
    //console.log(M);
    M.AutoInit();
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <div>
          <h3>Set Status:</h3>
          <div className="input-field col s12">
            <select defaultValue="">
              <option value="" disabled>
                Choose your option
              </option>
              <option value="1">Beer Master</option>
              <option value="2">Beer Buddy</option>
              <option value="3">Looking</option>
              <option value="3">Staying Sober</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Status);
