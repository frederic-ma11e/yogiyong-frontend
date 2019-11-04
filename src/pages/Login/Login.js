import React, { Component } from 'react';
import './login.scss';
import Header from '../../Components/Header';
import LoginForm from '../../Components/LoginContainer/LoginForm/LoginForm';
import LoginAnother from '../../Components/LoginContainer/LoginAnother/LoginAnother';
import SignUpLink from '../../Components/LoginContainer/SignUpLink/SignUpLink';

class Login extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="login-container">
          <div className="login-container__form">
            <div className="logoImg"></div>
            <LoginForm />
          </div>
          <LoginAnother />
          <SignUpLink />
        </div>
      </div>
    );
  }
}

export default Login;