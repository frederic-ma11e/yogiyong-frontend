import React, { Component } from "react";
import "./RestaurantInfoCategory.scss";
import RestaurantInfoCList from "./RestaurantInfoCList";

import data from "Data/restaurantInfoCategory";
import FoodOrderModal from "../FoodOrderModal";
const API = "http://10.58.3.24:8000/restaurant/4";

class RestaurantInfoCategory extends Component {
  // 식당정보 카테고리 상세페이지
  constructor() {
    super();
    this.state = {
      modal: false, //false
      data: [],
      modalData: ""
    };

    this.openModal = (e, info) => {
      e.preventDefault();
      this.setState(
        {
          modal: true
        },
        () => {
          this.setState({ modalData: info });
        }
      );
    };

    this.handleCloseModal = e => {
      this.setState({
        modal: false
      });
    };
  }

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
    console.log('RestaurantInfoCategory')
    const { data } = this.state;
    const list = data.map((info, index) => (
      <RestaurantInfoCList
        key={index}
        info={info}
        isOpen={this.state.modal}
        clicked={this.openModal}
      />
    ));
    return (
      <div>
        {list}
        {this.state.modalData && (
          <FoodOrderModal
            restaurant={this.props.restaurant}
            setFoodOrder={this.props.setFoodOrder}
            isOpen={this.state.modal}
            isClose={this.handleCloseModal}
            onClick={this.openModal}
            data={this.state.modalData.info}
          />
        )}
      </div>
    );
  }
}

export default RestaurantInfoCategory;
