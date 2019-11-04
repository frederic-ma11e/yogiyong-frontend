import React, { Component } from "react";
import Header from "../../Components/Header";
import "./RestaurantInfo.scss";
import data from "Data/restaurantInfoCategory";
import RestaurantInfoCategory from "Components/RestaurantInfoCategory";
import Footer from "../../Components/Footer";

const API = 'http://10.58.2.209:8000/restaurant/1'
export class RestaurantInfo extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      data: []
    };
  }
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(info => {
      const menusData = info.all_menus 
      menusData.shift() // 첫번째 값이 photoImage, 필요없는 데이터여서 제거했습니다.
      const popularMenu = menusData[0]
      popularMenu.title = "인기메뉴" // title값이 Top10으로 전달되어서 인기메뉴로 변경해주었습니다.
      menusData[0] = popularMenu
      this.setState({
      data: menusData
    })
     } 
    )

    
  }

  render() {
   
    console.log("dsadsa",this.state.data)
    return (
      <div>
        <Header />
        <div className="restaurantContainer">
          <div className="restaurant">
            <div className="restaurant__title">
              <span>쫄면주는삼겹본능-삼성1호점</span>
            </div>

            <div className="restaurant__Info">
              <img classname="restaurant__Info__Img" />
              <ul>
                <li classname="star">★</li>
                <li className="minPrice">
                  최소주문금액<span></span>
                </li>
                <li className="payment">
                  결제<span></span>
                </li>
                <li className="deliveryTime">
                  배달시간<span></span>
                </li>
              </ul>
            </div>

            <div className="ownerMsg">
              <strong>사장님알림</strong>
              <span></span>
            </div>
          </div>
        </div>

        <RestaurantInfoCategory data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default RestaurantInfo;
