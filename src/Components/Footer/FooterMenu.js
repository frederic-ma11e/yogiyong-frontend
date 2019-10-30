import React, { Component } from "react";
import "Styles/common.scss";
import FooterMenuList from "./FooterMenuList";
import facebookImage from "Images/facebook-icon.png";
import naverblogImage from "Images/naver-blog-icon.jpg";

class FooterMenu extends Component {
  render() {
    const { data, className } = this.props
    
    const list = data.map((info, index) => (
      <FooterMenuList key={index} info={info} />
    ));
    return (
      <div className={className}>
        <ul className="footer-menu-ul">
          {list}
          <li className="sns-link">
            <a><img src={facebookImage} className="facebook-icon" />페이스북</a>
            <a><img src={naverblogImage} className="naver-blog-icon" />블로그</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterMenu;
