import React, { Component } from 'react'
import './StoreInformation.scss'

class StoreInformation extends Component {

    render() {
        // const data = this.props.data;
        const { data } = this.props;

        let accNum = Math.floor(data.threshold)
        let imgSrc = "https://www.yogiyo.co.kr" + data.logo_url
        return (
            <div className="store-list__store-container">
                <div className="store-list__store">
                    <div>
                        <img className="store-list__store-logo" src={imgSrc}>
                        </img>
                    </div>
                    <div className="store-list__store-info">
                        <div className="store-list__store-name">
                            {data.name}
                        </div>
                        <div className="store-list__store-detail">
                            <img>
                            </img>
                            <span>
                                ★ {data.review_avg}
                            </span>
                            <span>
                                리뷰  {data.review_count}
                            </span>
                        </div>
                        <div>
                            <span>
                                {data.storePayMethod}
                            </span>
                            <span>
                                {accNum}원이상 배달
                            </span>
                        </div>
                    </div>
                </div>
                <div className="store-list__store-time-container">
                    <span className="store-list__store-time">
                        {data.estimated_delivery_time}
                    </span>
                </div>
            </div>

        )
    }
}
export default StoreInformation