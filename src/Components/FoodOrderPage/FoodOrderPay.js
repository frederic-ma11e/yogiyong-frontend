import React, { Component } from "react";

class FoodOrderPay extends Component { // 결제수단 선택 컴포넌트입니다.
  state = {
    card: 1,
    money: false
  };

  componentDidMount(){
    this.props.setPayment(this.state.card,this.state.money);
  }
  

  handleClick = e => {
    if (e.target.id === "card") {
      this.setState({
        card: 1,
        money: false
      });
    } else {
      this.setState({
        card: false,
        money: 2
      });
    }
    this._click()  
  };
  _click() {
    console.log("실행")
    this.props.setPayment(this.state.card,this.state.money);
  }
  render() {
    const { card, money } = this.state;
    return (
      <div>
        <div className="panel-body">
          <strong className="pay-title">현장결제 </strong>
          <span className="pay-desc"> 음식받고 직접 결제</span>
          <div className="collect-card">
            <label
              className={"pay-card " + (card ? "active" : "noneActive")}
              onClick={this.handleClick}
              id="card"
            >
              <div
                className={
                  "card-img " +
                  (card ? "card-active-img" : "card-noneActive-img")
                }
              />
              신용카드
            </label>
            <label
              className={"pay-money " + (money ? "active" : "noneActive")}
              onClick={this.handleClick}
              id="money"
            >
              <div
                className={
                  "money-img " +
                  (money ? "money-active-img" : "money-noneActive-img")
                }
              />
              현금
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodOrderPay;
