import React, { Component } from "react";

class FoodOrderPrice extends Component { // 총 결제 금액관련 컴포넌트입니다.
  state = {
    // total_price: 0
  };
  // componentDidMount() { 
  //   const { menu } = this.props
  //   let _price = 0;
  //   for (let i = 0; i < menu.length; i++) { // 총 결제 금액 관련 for문입니다. 
  //     _price += menu[i].price * menu[i].count;
  //   }
  //   let _total_price = _price;
  //   this.setState({
  //     total_price: _total_price
  //   });
  // }
  render() {
    // const { total_price } =this.state
    return (
      <div className="list-group-total">
        <span className="list-group-total__price">
          <div className="total-title">총 결제 금액</div>
          <div className="total-price">{this.props.total_price}원</div>
        </span>
      </div>
    );
  }
}

export default FoodOrderPrice;
