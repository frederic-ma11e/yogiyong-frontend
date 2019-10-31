import React, { Component } from 'react'
import Header from '../../Components/Header'
import './RestaurantInfo.scss'



export class RestaurantInfo extends Component {
    constructor(){
        super()
        this.state={
            price:'',
        }
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <div className="restaurantContainer">
                    <div className="restaurant">
                        <div className="restaurant__title">
                            <span>쫄면주는삼겹본능-삼성1호점</span>
                        </div>

                       <div className="restaurant__Info">
                            <img classname="restaurant__Info__Img"/>
                            <ul>
                                <li classname="star">★</li>
                                <li className="minPrice">최소주문금액<span></span></li>
                                <li className="payment">결제<span></span></li>
                                <li className="deliveryTime">배달시간<span></span></li>
                            </ul>
                        </div>
                        
                        <div className="ownerMsg"><strong>사장님알림</strong><span></span></div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantInfo
