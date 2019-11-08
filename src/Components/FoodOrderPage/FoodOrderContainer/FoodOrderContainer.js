import React ,{Component} from "react";
import "./FoodOrderContainer.scss";
import DeliveryInfo from "../DeliveryInfo";
import OrderRequest from "../OrderRequest";
import FoodOrderPay from "../FoodOrderPay";
class FoodOrderContainer extends Component {
  
  render(){
    return (
      <div className="food-order-container">
        <div className="food-order-container__title">
          <span>결제하기</span>
        </div>
        <DeliveryInfo setAddress={this.props.setAddress} detailAddress={this.props.detailAddress} phone={this.props.phone}/>
        <OrderRequest setRequest={this.props.setRequest}/>
        <div className="panel-heading">
          <span>결제수단 선택</span>
        </div>
        <FoodOrderPay setPayment={this.props.setPayment}/>
      </div>
    );
  }
  }

export default FoodOrderContainer;
