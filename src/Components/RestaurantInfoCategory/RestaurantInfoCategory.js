import React, { Component } from "react";
import "./RestaurantInfoCategory.scss";
import RestaurantInfoCList from "./RestaurantInfoCList";
class RestaurantInfoCategory extends Component {


  render() {
    const { data } = this.props ;
    const list = data.map((info, index) => (
      <RestaurantInfoCList key={index} info={info} />
    ));
    return <div>{list}</div>;
  }
}

export default RestaurantInfoCategory;
