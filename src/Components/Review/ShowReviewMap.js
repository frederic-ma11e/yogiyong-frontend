import React, { Component } from "react";

class ShowReviewMap extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="user-name">si**</div>
        <div className="star-point">
          맛 
          <div className="review-star-icon" />
          <span className="review-star-count">{Math.floor(this.props.review.rating_taste)}</span>
          　양  
          <div className="review-star-icon" />
          <span className="review-star-count">{Math.floor(this.props.review.rating_quantity)}</span>
          　배달  
          <div className="review-star-icon" />
          <span className="review-star-count">{Math.floor(this.props.review.rating_delivery)}</span>
        </div>
        <div className="user-content">
          {/* <div className="review-order-menu">가</div> */}

          <div className="review-comment">{this.props.review.comment}</div>
          <div className="review-comment">　</div>
        </div>
      </div>
    );
  }
}

export default ShowReviewMap;
