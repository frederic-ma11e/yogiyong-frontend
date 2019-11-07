import React, { Component } from "react";
import "./SideCart.scss";

export class SideCart extends Component {


  constructor() {
    super();
    this.state = {
      menuTitle: "구이삼겹 1인",
      menuPrice: 13500,
      totalPrice: 0,
      count: 1,
      price: 0,
      opacity:0.3
    };
  }

//   clickedCloseBtn=()={

//   }

clickedMinusBtn=()=>{
    if(this.state.count!==1){
        this.setState({count: this.state.count-1})
    }
}
// calTotalPrice=()=>{
//     totalPrice= (this.state.Price* this.state.count) + this.state.totalPrice;
// }
clickedPlusBtn=()=>{
    this.setState({count:this.state.count+1})
}
orderBtn=()=>{
    this.setState({opacity:1})
}
// 주문표에 음식이 하나 이상일 경우 -> opacity :1 로
// 만약 close 버튼을 눌러서 음식이 하나도 없을경우 opacity:0.3
//또, div 체인지 시켜주기



  render() {
    return (
        <div className="sideCartContainer">
            <div className="sideCartContainer__title">
            주문표
                <div className="trashBin" />
            </div>

            <div className="sideCartContainer__emptyList">
                <div className="emptyOrderList">주문표에 담긴 메뉴가 없습니다.</div>
                <div className="deliveryFee">배달요금 {Math.floor(this.props.info.delivery_fee)}원 별도 </div>
            </div>

            <div className="sideCartContainer__List">
                <div className="innerContainer">
                    <div className="menuTitle">{this.state.menuTitle}</div>
                    <div className="cartList">
                        <div className="cartList__left">
                            <div className="closeBtn" onClick={this.clickedCloseBtn}/>
                            <span>{this.state.menuPrice} 원</span>
                        </div>
                        <div className="cartList__right">
                            <div className="minusBtn" onClick={this.clickedMinusBtn} />
                            <span>{this.state.count}</span>
                            <div className="plusBtn" onClick={this.clickedPlusBtn} />
                        </div>
                    </div>
                </div>
                <div className="deliveryFee">
                    배달요금 {Math.floor(this.props.info.delivery_fee)}원 별도
                </div>
                <div className="minimumOrderFee">
                    최소주문금액: {Math.floor(this.props.info.threshold)}원 이상
                </div>
                <div className="totalPrice">합계: {this.state.totalPrice}원</div>
            </div>
            </div>

        
    )
  }
}

export default SideCart;
