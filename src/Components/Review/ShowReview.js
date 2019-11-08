import React, { Component } from "react";
import "./Review.scss";
import ShowReviewMap from "./ShowReviewMap";

class ShowReview extends Component {
  state = {
    data: ""
  };
  componentDidMount() { 
     let id = 1;
    fetch(`http://10.58.2.201:8004/review/view/${id}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("dsa,",res);
        this.setState({
          data: res
        });
      });}

  render() {

    let reviewList = "";
    if(this.state.data) {
      reviewList = this.state.data.map(el => <ShowReviewMap review={el}/>)
    }
  
    return (
      <div className="show-review">
        {reviewList}
      </div>
    );
  }
}

export default ShowReview;
