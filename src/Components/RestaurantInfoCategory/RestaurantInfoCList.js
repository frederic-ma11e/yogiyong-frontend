import React, { Component } from "react";
import RestaurantInfoCMenu from "./RestaurantInfoCMenu";

class RestaurantInfoCList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMode: false,
      position: ""
    };
  }

  handleClick = () => {
    if (this.state.displayMode === false)
      this.setState({ displayMode: true, position: "-184px -43px" });
    else this.setState({ displayMode: false, position: "-149px -43px" });
  };
  render() {
    const { title, menus, id } = this.props.info;
    const { displayMode, position } = this.state;
   title.replace("Top 10",'인기 메뉴')
    const categoryList = menus.map((info, index) => (
      <RestaurantInfoCMenu key={index} info={info} />
    ));
    return (
      <div>
        <div
          className="restaurantInfo-category-container"
          onClick={this.handleClick}
          name={id}
        >
          <span>{title}</span>
          <div
            className="arrow-icon"
            style={{ backgroundPosition: position }}
          />
        </div>
        <div style={{ display: displayMode ? "" : "none" }}>{categoryList}</div>
      </div>
    );
  }
}

export default RestaurantInfoCList;
