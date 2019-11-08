import React, { Component } from "react";

class OrderRequest extends Component { // 주문시 요청사항 컴포넌트입니다.
  state = {
    displayMode2: true,
    request:''
  };

  handleChange=(e)=>{
    this.setState({
      request:e.target.value
    })
  }
  
  handleClick2 = () => {
    this.setState({
      pageHeight: document.querySelector(".root").clientHeight,
      displayMode2: !this.state.displayMode2
    });
  };

  componentDidMount(){
    let requestInput = document.querySelector('#request')
    requestInput.addEventListener("blur", e => {
    console.log("dsadsa")
    this.props.setRequest(this.state.request);
  })

  }
  render() {
    const { displayMode2} =this.state
    return (
      <div>
        <div className="panel-heading" onClick={this.handleClick2}>
          <span>주문시 요청사항</span>
          <span
            className="arrow-icon"
            style={{
              backgroundPosition: displayMode2
                ? " -184px -43px"
                : "-149px -43px"
            }}
          />
        </div>

        <div
          className="panel-body"
          style={{ display: displayMode2 ? "" : "none" }}
        >
          <textarea
            className="textarea"
            rows="4"
            cols="89"
            placeholder="주문시 요청 사항이 있으시면 남겨주세요. 단, 주류 등 청소년 유해물품 관련 단어는 입력하실 수 없습니다."
            value={this.state.request} 
            onChange={this.handleChange}
            name="request"
            id="request"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default OrderRequest;
