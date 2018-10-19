import React, { Component } from "react";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth, authError } = this.props;
    const isInvalid = this.state.password !== this.state.cpassword;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="clear" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-5">Sign Up</h5>
          <div className="input-field">
            <i className="material-icons prefix">person</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">person</i>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">https</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">https</i>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn amber">Sign Up</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
            {isInvalid ? <p>Passwords must match</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
