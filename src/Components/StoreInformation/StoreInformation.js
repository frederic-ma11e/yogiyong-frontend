import React from 'react'
import './StoreInformation.scss'
import { Link } from 'react-router-dom'
import DiscountTag from '../DiscountTag/DiscountTag'
import CescoTag from '../CescoTag/CescoTag'


class StoreInformation extends React.Component {

    // restaurantClicked = () => {
    //     // this.props.history.push('/')
    // }
    constructor(props) {
        super(props)
        this.state = {
            discountTag: "",
            cescoTag: false,
            tags: true
        }
    }
    componentDidMount() {
        // let a = []
        // let b = this.props.data.tags
        if (this.props.data.additional_discount) {
            this.setState({
                discountTag: "discount"
            })
        }
        console.log("didmount tags===", this.props.data.tags)
        if (this.props.data.tags && this.props.data.tags[0]) {
            this.setState({
                cescoTag: true
            })
            console.log("33333====", this.state)
        }
    }
    render() {
        // const data = this.props.data;
        console.log("render tags===", this.props.data.tags)
        const { data } = this.props;

        // let Cesco = ""
        // if (data.tags[0] === true && data.tags[0] === "CESCO") {
        //     Cesco =  this.props.data && <CescoTag style={data.tags[0]} /> 
        // }

        let accNum = Math.floor(data.threshold)
        let imgSrc = "https://www.yogiyo.co.kr" + data.logo_url
        return (
            <Link
                className="store-list__store-container"
                to={`/restaurant/${data.id}`}
            >
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
                            <span className="store-list__store-detail-rate">
                                ★ {data.review_avg}
                            </span>
                            <span className="for-space">
                                l
                            </span>
                            <span>
                                리뷰  {data.review_count}
                            </span>
                        </div>
                        <div className="store-list__store-last-column">
                            <span className="store-list__store-detail-paymethod">
                                요기서 결제
                            </span>
                            <span className="for-space">
                                l
                            </span>
                            <span className="store-li">
                                {accNum}원 이상 배달
                            </span>
                        </div>
                        <div>
                            {
                                data.additional_discount > 0 &&
                                <DiscountTag style={data.additional_discount} />
                            }
                            {/* {Cesco} */}
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="store-list__store-time-container">
                    <span className="store-list__store-time">
                        {data.estimated_delivery_time}
                    </span>
                </div>
            </Link>

        )
    }
}
export default StoreInformation