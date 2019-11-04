import React, { Component } from "react";

class DeliveryInfo extends Component { //카테고리중 하나인 배달정보 컴포넌트입니다.
  state = {
    displayMode: true
  };
  handleClick = () => {
    const {displayMode} =this.state
    if (displayMode === true) {
      this.setState({
        displayMode: false
      });
    } else {
      this.setState({
        displayMode: true
      });
    }
  };
  render() {
    const  { displayMode } =this.state
    const { handleClick } =this
    return (
      <div>
        <div className="panel-heading" onClick={handleClick}>
          <span>배달정보</span>
          <span
            className="arrow-icon"
            style={{
              backgroundPosition: displayMode
                ? " -184px -43px"
                : "-149px -43px"
            }}
          />
        </div>

        <div
          className="panel-body"
          style={{ display:displayMode ? "" : "none" }}
        >
          <form className="panel-body__form">
            <div className="panel-body__form--group">
              <label className="panel-body__form--group--label">주소</label>
              <div className="panel-body__form--group--box">
                <input placeholder=" 주소"></input>
              </div>
            </div>

            <div className="panel-body__form--group">
              <div className="panel-body__form--group--box">
                <input placeholder=" (필수)상세주소 입력"></input>
              </div>
            </div>

            <div className="panel-body__form--group">
              <label className="panel-body__form--group--label">
                휴대전화번호
              </label>
              <div className="panel-body__form--group--box">
                <input placeholder=" (필수)휴대전화 입력"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DeliveryInfo;
