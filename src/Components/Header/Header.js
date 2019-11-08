import React from "react";
import "./Header.scss";
import "Styles/common.scss";
import logo from "Images/logo-yogiyo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const Header = props => {

  const logoutClick=()=>{

    alert('로그아웃을 완료 했습니다.')
    localStorage.removeItem("user_token")
    window.location.reload();
  }

  return (
    <div className="header">
      <div className="header__top">
        <Link to={"/"}>
          <h1 className="logoTop">
            <img className="Image" src={logo}></img>
          </h1>
        </Link>

        <div className="login-top">
          {localStorage.getItem("user_token") 
           ? (
            <Link to={"/"}>
              <button className="login-top__login-button"
              onClick={logoutClick}>로그아웃</button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="login-top__login-button">
                로그인 | 회원가입
              </button>
            </Link>
          )
          }
          <button className="login-top__order-button">
            주문표({props.menus_num})
          </button>
        </div>
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    menus_num: state.menu_number
  };
};

export default connect(mapStateToProps)(Header);
