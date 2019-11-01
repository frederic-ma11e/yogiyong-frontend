import React, { Component } from "react";
import Header from "../../Components/Header";
import "./RestaurantInfo.scss";
import data from "Data/restaurantInfoCategory";
import RestaurantInfoCategory from "Components/RestaurantInfoPage/RestaurantInfo-Category/RestaurantInfoCategory";
import Footer from "../../Components/Footer";

export class RestaurantInfo extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      data: data.category
    };
  }

  render() {
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
