import React, { Component } from "react";

class SideCartMenu extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="innerContainer">
          <div className="menuTitle">{this.props.data[0][0]}</div>

          <div className="cartList">
            <div className="cartList__left">
              <div className="closeBtn" onClick={this.clickedCloseBtn} />
              <span>{this.props.data[0][1]} 원</span>
            </div>
            <div className="cartList__right">
              <div className="minusBtn" onClick={this.clickedMinusBtn} />
              <span>{this.props.data[0][2]}</span>
              <div className="plusBtn" onClick={this.clickedPlusBtn} />
            </div>
          </div>
        </div>
        // <div className="deliveryFee">배달요금 원 별도</div>
        // <div className="minimumOrderFee">최소주문금액: 원 이상</div>
        // <div className="totalPrice">
        //   {/* 합계: {this.props.data.info.totalPrice}원 */}
        // </div>
      
        );
  }
}

export default SideCartMenu;
