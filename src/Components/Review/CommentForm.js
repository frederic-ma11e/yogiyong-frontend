/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import "./PostingContainer.scss";

class CommentForm extends Component {
  state = {
    name: "sichan",
    text: "",
    opacityColor: "0.3",
    star1: -7,
    star2: -7,
    star3: -7
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
    return [e.target.value.length] > 0
      ? (this.state.opacityColor = 1)
      : (this.state.opacityColor = 0.3);
  };

  handleSubmit = e => {
    // this.props.onCreate(this.state);
    // post연결
    this.setState({ text: "" });
    this.state.opacityColor = 0.3;
    // if(`this.state.star${i}`){

    let postStar1 = this.calcReviewStars(this.state.star1);
    let postStar2 = this.calcReviewStars(this.state.star2);
    let postStar3 = this.calcReviewStars(this.state.star3);

    this.POST(postStar1, postStar2,postStar3)

    console.log(postStar1)
    console.log(postStar2)
    console.log(postStar3)
  };

  POST = (postStar1,postStar2,postStar3) => {
      let id =1
    fetch(`http://10.58.2.201:8004/review/register/${id}`, {
        method: "post",
        headers:{
            Authorization:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.SccJ5ACg7ObvzW6dNipS_ehN2k0oVd5b3TqTkBWBz1M'
        },
        body: JSON.stringify({
            comment:this.state.text, 
            rating:{"taste":postStar1,"delivery":postStar2, "quantity":postStar3}, // 배달요청사항
            menus:[{"id":4}, {"id":5}], //배열
            amounts:[3,3], //개수
            review_img:[]
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "SUCCESS") {
            console.log("ok")
            //this.props.history.push("/main");//주문 땡스페이지
           // localStorage.setItem("user_id", res.user_access_token);
          }
        });
  }

  calcReviewStars = (currentStar) => {
    if (currentStar === -7) {
      return 1;
    } else if (currentStar === -36) {
      return 2;
    } else if (currentStar === -65) {
      return 3;
    } else if (currentStar === -96) {
      return 4;
    } else if (currentStar === -124) {
      return 5;
    }
  };

  handleClick = e => {
    if (e.clientX >= 317 && e.clientX <= 344) {
      this.setState({
        [e.target.id]: -7
      });
      console.log("1");
    } else if (e.clientX >= 348 && e.clientX <= 367) {
      this.setState({
        [e.target.id]: -36
      });
      console.log("2");
    } else if (e.clientX >= 377 && e.clientX <= 398) {
      this.setState({
        [e.target.id]: -65
      });
    } else if (e.clientX >= 406 && e.clientX <= 427) {
      this.setState({
        [e.target.id]: -96
      });
    } else if (e.clientX >= 437 && e.clientX <= 458) {
      this.setState({
        [e.target.id]: -124
      });
    }
    console.log(e.clientX);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="rating">
            <div className="rating-frame">
              <div className="rating-box">
                <div className="rating-title">맛</div>
                <div
                  className="starbox"
                  onClick={this.handleClick}
                  id="star1"
                  style={{ backgroundPositionY: this.state.star1 }}
                ></div>
              </div>
            </div>

            <div className="rating-frame">
              <div className="rating-box">
                <div className="rating-title">양</div>
                <div
                  className="starbox"
                  onClick={this.handleClick}
                  id="star2"
                  style={{ backgroundPositionY: this.state.star2 }}
                ></div>
              </div>
            </div>

            <div className="rating-frame">
              <div className="rating-box">
                <div className="rating-title delivery">배달</div>
                <div
                  className="starbox"
                  onClick={this.handleClick}
                  id="star3"
                  style={{ backgroundPositionY: this.state.star3 }}
                ></div>
              </div>
            </div>
          </div>
          <input
            name="text"
            className="myCommentBox"
            placeholder="리뷰 달기 "
            value={this.state.text}
            onChange={this.handleChange}
            text="text"
          />
          <button
            className="myCommentSubmitButton"
            type="submit"
            style={{ opacity: this.state.opacityColor }}
          >
            게시
          </button>
        </form>
      </>
    );
  }
}

export default CommentForm;
