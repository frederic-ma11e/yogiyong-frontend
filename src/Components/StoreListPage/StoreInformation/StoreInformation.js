import React from 'react'
import './StoreInformation.scss'

class StoreInformation extends React.Component {
    render() {
        return (
            <div className="store-list__store-container">
                <div className="store-list__store">
                    <div>
                        <img className="store-list__store-logo" src={this.props.data.storeLogo}>
                        </img>
                    </div>
                    <div className="store-list__store-info">
                        <div className="store-list__store-name">
                            {this.props.data.storeName}
                        </div>
                        <div className="store-list__store-detail">
                            <img>
                            </img>
                            <span>
                                {this.props.data.storeRate}
                            </span>
                            <span>
                                리뷰 {this.props.data.storeReview}
                            </span>
                            <span>
                                사장님댓글 {this.props.data.storeReply}
                            </span>
                        </div>
                        <div>
                            <span>
                                {this.props.data.storePayMethod}
                            </span>
                            <span>
                                {this.props.data.MinPrice}원이상 배달
                            </span>
                        </div>
                    </div>
                </div>
                <div className="store-list__store-time-container">
                    <span className="store-list__store-time">
                        {this.props.data.storeDelivTime}
                    </span>
                </div>
            </div>

        )
    }
}
export default StoreInformation