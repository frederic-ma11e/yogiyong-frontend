import React from 'react'
import './StoreInformation.scss'

class StoreInformation extends React.Component {

    render() {
        let accNum = Math.floor(this.props.data.threshold)
        let imgSrc = "https://www.yogiyo.co.kr" + this.props.data.logo_url
        return (
            <div className="store-list__store-container">
                <div className="store-list__store">
                    <div>
                        <img className="store-list__store-logo" src={imgSrc}>
                        </img>
                    </div>
                    <div className="store-list__store-info">
                        <div className="store-list__store-name">
                            {this.props.data.name}
                        </div>
                        <div className="store-list__store-detail">
                            <img>
                            </img>
                            <span>
                             ★ {this.props.data.review_avg}
                            </span>
                            <span>
                                리뷰  {this.props.data.review_count}
                            </span>
                        </div>
                        <div>
                            <span>
                                {this.props.data.storePayMethod}
                            </span>
                            <span>
                                {accNum}원이상 배달
                            </span>
                        </div>
                    </div>
                </div>
                <div className="store-list__store-time-container">
                    <span className="store-list__store-time">
                        {this.props.data.estimated_delivery_time}
                    </span>
                </div>
            </div>

        )
    }
}
export default StoreInformation