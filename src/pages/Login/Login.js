import React, { Component } from 'react';

import './Login.scss';
import Login_form from './Login-form/Login_form';
// import Login_CheckBox from './Check-box/Login_CheckBox';
// import Login_button from './Login-botton/Login_button';
import Login_another from './Login-another/Login_another';
import Signup from './Signup/Signup';

class Login extends Component {

  render() {


    return (
      <div className="login-container">
        <div className="login-container__form">
          <div className="logoImg"></div>
          <Login_form/>
        </div>
        <Login_another />
        <Signup />
      </div>
    );
  }
}

export default Login;