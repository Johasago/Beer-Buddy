import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email:"",
        password:""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state); 
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    render() {
    return (
      <div className="container">
        <form className="clear" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-5">Sign In</h5>
        <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <i className="material-icons prefix">https</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <button className="btn amber">Sign In</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SignIn
