import React from "react";
import "./Header.scss";
import "Styles/common.scss";
import logo from "Images/logo-yogiyo.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from "../../store/actions"

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__top">
        <Link
          to={"/"}>
          < h1 className="logoTop">
            <img className="Image" src={logo}></img>
          </h1>
        </Link>
        <div className="login-top">
          <button className="login-top__login-button">로그인 | 회원가입</button>
          <button className="login-top__order-button">주문표({props.menus_num})</button>
        </div>
      </div>
    </div >
  );
};

const mapStateToProps = state => {
  return {
    menus_num: state.menu_number
  }
}

export default connect(mapStateToProps)(Header);