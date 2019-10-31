import React, { Component } from "react";
import CategoryInfo from "./CategoryInfo";

class CategoryInfoList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map((info, index) => (
      <CategoryInfo key={index} data={info} />
    ));
    return <div>{list}</div>;
  }
}

export default CategoryInfoList;