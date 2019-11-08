import React, { Component } from 'react';
import CommentForm from './CommentForm';
import ShowReview from './ShowReview';

class Review extends Component {
  render() {
    return (
      <div className ="review-container">
        <CommentForm/>
        <ShowReview/>
      </div>
    );
  }
}

export default Review;