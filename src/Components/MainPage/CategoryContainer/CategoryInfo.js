import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CategoryInfo extends Component {
  handleClick = () => {
    console.log("clcik")
  }
  render() {
    const { id, title, imageUrl } = this.props.data
    return (
      <Link
        id={id}
        to={`/storelist/${id}`} >
        <div className="category-container__row--block">
          <div className="category-container--a" onClick={this.props.click}>
            <div className="category-title">{title}</div>
            <img className="category-image" src={imageUrl} />
          </div>
        </div>
      </Link >
    );
  }
}

export default CategoryInfo;
