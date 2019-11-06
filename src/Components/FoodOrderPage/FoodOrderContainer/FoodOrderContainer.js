import React from "react";
import "./FoodOrderContainer.scss";
import DeliveryInfo from "../DeliveryInfo";
import OrderRequest from "../OrderRequest";
import FoodOrderPay from "../FoodOrderPay";
const FoodOrderContainer = ()=>{
    return (
      <div className="food-order-container">
        <div className="food-order-container__title">
          <span>결제하기</span>
        </div>
        <DeliveryInfo />
        <OrderRequest />
        <div className="panel-heading">
          <span>결제수단 선택</span>
        </div>
        <FoodOrderPay />
      </div>
    );
  }

export default FoodOrderContainer;
