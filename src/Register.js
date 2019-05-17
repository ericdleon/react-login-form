import React, { Component } from 'react';
import logo from './logo.svg';

class Register extends Component {
  render() {
    return (
      <div className="App">
        <h4>Register Form</h4>
        <form>
          <div>
            <input type="text" placeholder="email" />
          </div>
          <div>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <input type="text" placeholder="password" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
