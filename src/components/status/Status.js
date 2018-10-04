import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './status.css'

class Status extends Component {
  componentDidMount(){
    console.log(M);
    M.AutoInit();
}
ren
  render() {
    return (
      <div className="container">
      <div>
        <h3>Set Status:</h3>
               <div className="input-field col s12">
                <select defaultValue="">
                  <option value="" disabled >Choose your option</option>
                  <option value="1">Beer Master</option>
                  <option value="2">Beer Buddy</option>
                  <option value="3">Looking</option>
                  <option value="3">Staying Sober</option>
                </select>
              </div>
              </div>
              </div>
        )
  }
}

export default Status
