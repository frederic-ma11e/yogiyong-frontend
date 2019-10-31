import React, { Component } from "react";

class FooterMenuList extends Component {
  render() {
    const { title, line } = this.props.info;
    return (
      <div>
        <li className="footer-menu-li">
          <span className="title">{title}</span>
          <span>{line}</span>
        </li>
      </div>
    );
  }
}

export default FooterMenuList;
