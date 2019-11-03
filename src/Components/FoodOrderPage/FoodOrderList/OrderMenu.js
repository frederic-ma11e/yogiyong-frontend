import React, { Component } from "react";
import OrderMenuList from "./OrderMenuList";

class OrderMenu extends Component {
  render() {
    const data = this.props
    const list = data.map((data, index) => (
      <OrderMenuList key={index} info={data} />
    ));
    return <div>{list}</div>;
  }
}

export default OrderMenu;
