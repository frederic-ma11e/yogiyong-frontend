import React, { Component } from "react";

class OrderMenuList extends Component {
  render() {
    const { title, count, price } = this.props.info
    return (
      <li className="list-group-item">
        <div className="menu-title">
          {title} x {count}개
        </div>
        <div className="menu-price">{price}원</div>
      </li>
    );
  }
}

export default OrderMenuList;