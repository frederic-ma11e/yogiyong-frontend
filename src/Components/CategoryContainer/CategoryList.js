import React, { Component } from "react";
import "./CategoryContainer.scss";
import "Styles/common.scss";
class CategoryList extends Component {
  render() {
    const { title, imageUrl } = this.props.info;
    return (
      <div>
        <div className="category-container__row--block">
          <div className="category-container--a">
            <div className="category-title">{title}</div>
            <img className="category-image" src={imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
