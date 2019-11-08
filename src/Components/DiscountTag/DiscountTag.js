import React, { Fragment } from 'react';
import './DiscountTag.scss'

class DiscountTag extends React.Component {
    render() {
        return (
            <>
                <span id="discount">
                    배달할인 {this.props.style}원
                </span>
            </>
        )
    }
}

export default DiscountTag;