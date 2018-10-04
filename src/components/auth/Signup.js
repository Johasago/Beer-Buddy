import React, { Component } from 'react'

class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
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
        <h5 className="grey-text text-darken-5">Sign Up</h5>
        <div className="input-field">
            <i className="material-icons prefix">person</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <i className="material-icons prefix">person</i>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
        </div>
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
            <i className="material-icons prefix">https</i>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="cpassword" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <button className="btn amber">Sign Up</button>
        </div>
        </form>
      </div>
    )
  }
}

export default Signup
