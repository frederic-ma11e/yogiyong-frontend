import React, { Component } from "react";
import "./RestaurantInfoCategory.scss";
import RestaurantInfoCList from "./RestaurantInfoCList";

const API = "http://10.58.2.209:8000/restaurant/1";

class RestaurantInfoCategory extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(info => {
        const menusData = info.all_menus;
        menusData.shift(); // 첫번째 값이 photoImage, 필요없는 데이터여서 제거했습니다.
        const popularMenu = menusData[0];
        popularMenu.title = "인기메뉴"; // title값이 Top10으로 전달되어서 인기메뉴로 변경해주었습니다.
        menusData[0] = popularMenu;
        this.setState({
          data: menusData
        });
      });
  }

  render() {
    const { data } = this.state;
    const list = data.map((info, index) => (
      <RestaurantInfoCList key={index} info={info} />
    ));
    return <div>{list}</div>;
  }
}

export default RestaurantInfoCategory;
