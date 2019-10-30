import React, { Component } from "react";

class FooterMenuList extends Component {
  render() {
    const { title, line } = this.props.info;
    return (
      <div>
        <li className="footer-menu-li">
          <a>{title}</a>
          <span>{line}</span>
        </li>
      </div>
    );
  }
}

export default FooterMenuList;
