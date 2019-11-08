import React, { Component } from 'react';
import CommentInfo from './CommentInfo';

class CommentInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      (info,index) => (
        <CommentInfo key={index} info={info}
      />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default CommentInfoList;