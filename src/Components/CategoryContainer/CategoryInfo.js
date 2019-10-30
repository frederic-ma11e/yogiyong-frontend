import React, { Component } from "react";
import CategoryList from "./CategoryList";
import "./CategoryContainer.scss";
import "Styles/common.scss";

class CategoryInfo extends Component {
  render() {
    const { data } = this.props;
    const list = data.map((info, index) => (
      <CategoryList key={index} info={info} />
    ));
    return <div>{list}</div>;
  }
}

export default CategoryInfo;
