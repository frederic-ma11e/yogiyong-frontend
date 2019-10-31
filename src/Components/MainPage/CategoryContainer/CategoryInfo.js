import React, { Component } from 'react';

class CategoryInfo extends Component {
  handleClick= ()=> {
    console.log("clcik")
  }
  render() {
    const { title , imageUrl }= this.props.data
    return (
      <div>
        <div className ="category-container__row--block">
            <div className="category-container--a" onClick={this.handleClick}>
              <div className="category-title">{title}</div>
              <img className="category-image" src={imageUrl}/>
            </div>
          </div>
      </div>
    );
  }
}

export default CategoryInfo;
