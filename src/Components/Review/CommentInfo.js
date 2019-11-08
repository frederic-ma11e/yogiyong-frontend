/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class CommentInfo extends Component {
    render() {
      const { name, text } = this.props.info
        return (
            <div>
                <a className="listComenetName">{ name }</a>
                <span className="listComentContent">{ text }</span>
            </div>
        );
    }
}

export default CommentInfo;