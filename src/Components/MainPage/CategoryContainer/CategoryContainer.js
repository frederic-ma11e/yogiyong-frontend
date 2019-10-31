import React, { Component } from "react";
import "./CategoryContainer.scss";
import "Styles/common.scss";
import data from "Data/categoryMenu.js";
import CategoryInfoList from "./CategoryInfoList";
class CategoryContainer extends Component {
  state = {
    info: data.info
  };
  render() {
    return (
      <div className="category-container">
        <div className="category-container__row">
          <CategoryInfoList data={this.state.info} />
        </div>
      </div>
    );
  }
}

export default CategoryContainer;