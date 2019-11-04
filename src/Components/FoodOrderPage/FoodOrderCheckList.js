import React, { Component } from "react";

class FoodOrderCheckList extends Component { // 오른쪽에있는 주문내역쪽 동의 관련 컴포넌트입니다. 
  state = {
    checkListAll: false,
    checkList0: false,
    checkList1: false,
    checkList2: false,
    checkList3: false,
    displayMode: true
  };

  ListAllClick = () => {
    if (this.state.checkListAll === false) {
      this.setState({
        checkListAll: true,
        checkList0: true,
        checkList1: true,
        checkList2: true,
        checkList3: true
      });
    } else {
      this.setState({
        checkListAll: false,
        checkList0: false,
        checkList1: false,
        checkList2: false,
        checkList3: false
      });
    }
  };

  handleArrowClick = () => {
    this.setState({});

    if (this.state.displayMode === true) {
      this.setState({
        displayMode: false
      });
    } else {
      this.setState({
        displayMode: true
      });
    }
  };

  handleClick = e => {
    let check = [
      this.state.checkList0,
      this.state.checkList1,
      this.state.checkList2,
      this.state.checkList3
    ];

    for (let i = 0; i < 4; i++) {
      if (e.target.id === `checkList${i}`) { // 전체보기 클릭 관련 if문입니다.
        // id값과 비교
        if (check[i] === false) {
          this.setState({
            [e.target.id]: true
          });
        } else if (check[i] === true) {
          this.setState({
            [e.target.id]: false,
            checkListAll: false
          });
        }
      }
    }
  };

  render() {
    const {displayMode, checkListAll, checkList0, checkList1, checkList2, checkList3} =this.state
    return (
      <div>
        <div className="check-set">
          <div className="check-heading">
            <div
              className="check-img"
              onClick={this.ListAllClick}
              style={{ backgroundPositionY: checkListAll ? -22 : 0 }}
            />
            <small className="check-all">전체동의</small>
            <span
              className="arrow-icon"
              onClick={this.handleArrowClick}
              style={{
                backgroundPosition: displayMode
                  ? " -184px -43px"
                  : "-149px -43px"
              }}
            />
          </div>

          <div
            className="check-box-display"
            style={{ display: displayMode ? "" : "none" }}
          >
            <div className="check-box">
              <div
                className="check-img"
                onClick={this.handleClick}
                style={{ backgroundPositionY: checkList0 ? -22 : 0 }}
                id="checkList0"
              />

              <small className="check-all">이용약관 동의(필수)</small>
            </div>

            <div className="check-box">
              <div
                className="check-img"
                onClick={this.handleClick}
                style={{ backgroundPositionY: checkList1 ? -22 : 0 }}
                id="checkList1"
              />
              <small className="check-all">
                개인정보 수집 및 이용동의(필수)
              </small>
            </div>

            <div className="check-box">
              <div
                className="check-img"
                onClick={this.handleClick}
                style={{ backgroundPositionY: checkList2 ? -22 : 0 }}
                id="checkList2"
              />
              <small className="check-all">
                개인정보 제3자 제공 동의(필수)
              </small>
            </div>

            <div className="check-box">
              <div
                className="check-img"
                onClick={this.handleClick}
                style={{ backgroundPositionY: checkList3 ? -22 : 0 }}
                id="checkList3"
              />
              <small className="check-all">만 14세 이상 이용자(필수)</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodOrderCheckList;
  