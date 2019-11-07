import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CategoryInfo extends Component {
  handlePosition = () => {
    window.scrollTo(0, 0)
  }
  render() {
    const { id, title, imageUrl } = this.props.data
    return (
      <Link
        id={id}
        to={`/storelist/${id}`} >
        <div className="category-container__row--block">
          <div className="category-container--a" onClick={this.handlePosition}>
            <div className="category-title">{title}</div>
            <img className="category-image" src={imageUrl} />
          </div>
        </div>
      </Link >
    );
  }
}

export default CategoryInfo;
