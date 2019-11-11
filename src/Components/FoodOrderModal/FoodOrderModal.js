import React, { Component } from "react";
import Modal from "react-modal";
import "./FoodOrderModal.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import FoodOrderCheckList from "../FoodOrderPage/FoodOrderCheckList";

class FoodOrderModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      price: 0,
      foodOrder: [],
      test: true
    };
    
    this.addFood = () => {
      const { price, name, id } = this.props.data;
      const { count } = this.state;

      this.props.onRestaurantInfoAdded(this.props.restaurant) 

      this.props.onMenuAdded(
        {
        "id": id, 
        "name" : name, 
        "count" : count, 
        "total_price" : price * count, 
        "price" : Number(price)})

      this.setState({
        count: 1
      })
      
    };
  }

  goToOrderPage = (c) => {
    this.addFood()
    this.props.history.push('/food-order');
  };

  minus = () => {
    // 1 이면 마이너스 클릭 안되고 색변경
    if (this.state.count !== 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };
  plus = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {  

    console.log("===========FoodOrderModal============")
    console.log(this.props.menus)
    
    console.log("FoodModal")
    const { isOpen, isClose } = this.props;
    const { image, price, name } = this.props.data;
    const { count } = this.state;
    Math.floor(price)
    return (
      <div>
        <Modal
          isOpen={isOpen}
          contentLabel="OrderMenu"
          className="detail"
          onRequestClose={isClose}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)"
            },
            content: {
              outline: "none"
            }
          }}
        >
          <div className="detail-header">
            <div className="detail-header__title">메뉴상세</div>
            <div onClick={isClose} className="close-img" /> {/* 닫기 버튼 */}
          </div>
          <div className="detail-content">
            <div className={image ? "detail-content-image" : ""}>
              <img className="menu-image" src={image}></img>
            </div>
            <div className="detail-content-text">{name}</div>
            <div className="detail-content-price">
              <strong className="price-strong">가격</strong>
              <div className="detail-content-price__binding">
              {price * count}
              </div>
            </div>
            <div className="detail-content-quantity-control">
              <strong className="quantity-strong">수량</strong>
              <div className="quantity-nums-container">
                <div
                  className={count >= 2 ? "minus" : "minus inactive"}
                  onClick={this.minus}
                />
                <div className="quantity-count">{count}</div>
                <div className="plus" onClick={this.plus} />
              </div>
            </div>
            <div className="detail-content-total">
              <strong className="total-strong">총 주문 금액</strong>
              <div className="detail-content-total-binding">
                <strong className="total-price-strong">
                {price * count}
                </strong>
                <span className="min-price">(최소주문금액 10,000원)</span>
              </div>
            </div>
          </div>
          <div className="detail-btn-wrap" onClick={isClose}>
            <div onClick={this.addFood} className="btn-wrap2 btn-add-cart">
              주문표에 추가
            </div>
            <div onClick={(e ,data) => this.goToOrderPage(data)} className="btn-wrap2 btn-order">
              주문하기
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      menus: state.menus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMenuAdded: (menu) => dispatch({ type: actionTypes.ADD_MENU, added_menu : menu }),
    onMenuRemoved: (menu) => dispatch({ type: actionTypes.REMOVE_MENU, removed_menu: menu}),
    onRestaurantInfoAdded: (restaurantInfo) => dispatch({type : actionTypes.ADD_RESTAURANT_INFO, restaurant_info: restaurantInfo}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FoodOrderModal));
