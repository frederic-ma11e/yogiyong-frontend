import React, { Component } from "react";

class DeliveryInfo extends Component { //카테고리중 하나인 배달정보 컴포넌트입니다.
  state = {
    displayMode: true,
    address:'',
    detailAddress:'',
    phone:''
  };

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
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
  
  componentDidMount(){
    
  let addressInput = document.querySelector('#address')
  addressInput.addEventListener("blur", e => {
    console.log("dsadsa")
    this.props.setAddress(this.state.address);
  })

  let detailAddressInput = document.querySelector('#detailAddress')
  detailAddressInput.addEventListener("blur", e => {
    this.props.detailAddress(this.state.detailAddress);

  })

  let phoneInput = document.querySelector('#phone')
  phoneInput.addEventListener("blur", e => {
    this.props.phone(this.state.phone);
  })
  }
  render() {
    
    const  { displayMode } =this.state
    const { handleClick } =this
    // console.log(this.state.address)
    // console.log(this.state.detailAddress)
    // console.log(this.state.phone)
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
                <input placeholder=" 주소" 
                value={this.state.address} 
                onChange={this.handleChange}
                name="address"
                id="address"></input>
              </div>
            </div>

            <div className="panel-body__form--group">
              <div className="panel-body__form--group--box">
                <input placeholder=" (필수)상세주소 입력"
                 value={this.state.detailAddress} 
                 
                 onChange={this.handleChange}
                 name="detailAddress"
                 id="detailAddress"></input>
              </div>
            </div>

            <div className="panel-body__form--group">
              <label className="panel-body__form--group--label">
                휴대전화번호
              </label>
              <div className="panel-body__form--group--box">
                <input placeholder=" (필수)휴대전화 입력"
                value={this.state.phone} 
                onChange={this.handleChange}
                name="phone"
                id="phone"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DeliveryInfo;
