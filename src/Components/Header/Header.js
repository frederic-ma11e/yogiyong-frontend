import React from "react";
import "./Header.scss";
import "Styles/common.scss";
import logo from "Images/logo-yogiyo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <h1 className="logoTop">
          <img className="Image" src={logo}></img>
        </h1>
        <div className="login-top">
          <button className="login-top__login-button">로그인 | 회원가입</button>
          <button className="login-top__order-button">주문표(0)</button>
        </div>
      </div>
    </div>
  );
};

export default Header;