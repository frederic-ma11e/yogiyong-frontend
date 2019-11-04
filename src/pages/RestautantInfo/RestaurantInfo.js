import React, { Component } from 'react'
import Header from '../../Components/Header'
import './RestaurantInfo.scss'
import HorizonMenu from '../../Components/RestaurantInfoPage/HorizonMenu'
import Infodetail from '../../Components/RestaurantInfoPage/Infodetail'
import PhotoMenuContainer from '../../Components/RestaurantInfoPage/PhotoMenuContainer'
import '../../Components/RestaurantInfoPage/HorizonMenu.scss'


export class RestaurantInfo extends Component {
    constructor(){
        super()
        
        this.state={
            title:'쫄면주는삼겹본능-삼성1호점',
            star:'4.6',
            minprice:'15,000원',
            payment:'신용카드, 현금, 요기서결제',
            deliveryTime:'20~30분',
            ownerMsg:'*리뷰이벤트 행사* 리뷰를 남겨주시는 고객에게는 치즈볼,새우볼,양념포테이토 3가지 증정한다고 하는데',
            ownerMsgClicked: false,
            
            menuTabs : {
                menuTab: true,
                reviewTab:false,
                infoTab:false
            },

            menuTabItems : [{
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            },
            {
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            },
            {
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            },
            {
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            },
            {
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            },
            {
                menuNum:'33',
                reviewNum:'1116',
                menuImg:'',
                menuName:'간장구이삼겹 2인',
                menuPrice:'19,000원',
            }]

        }
    }
    handleClick=(e)=>{
        console.log(e.target)
        if(e.target.id==="ownerMsg"){
            //console.log("clicked")
            let updatedMenuTabs = {...this.state.infoTab} //copy &paste
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = true
            this.setState({menuTabs : updatedMenuTabs});
            
        }
        if(e.target.id==="menuTab"){
            let updatedMenuTabs = {...this.state.menuTabs}
            updatedMenuTabs["menuTab"] = true
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = false
            
            this.setState({menuTabs : updatedMenuTabs});
        
        }
        if(e.target.id==="reviewTab"){
            let updatedMenuTabs = {...this.state.reviewTab}
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = true
            updatedMenuTabs["infoTab"] = false
            this.setState({menuTabs : updatedMenuTabs});
            
        }
        if(e.target.id==="infoTab"){
            let updatedMenuTabs = {...this.state.infoTab}
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = true

            this.setState({menuTabs : updatedMenuTabs});
            // this.setState({menuTab:false, reviewTab:false, infoTab:true});
        }
    }


    render() {

        let menuTabItems = ""
        if(this.state.menuTabs.menuTab) {
            menuTabItems = <PhotoMenuContainer data={this.state.menuTabItems} />
        }
        if(this.state.menuTabs.infoTab){
            menuTabItems = <Infodetail />
        }

        return (
            <div className='wholeRestaurantContainer'>
                <Header />
                <div className="restaurantContainer">
                    <div className="restaurant">
                        <div className="restaurant__title">
                            <span>{this.state.title}</span>
                        </div>

                       <div className="restaurant__Info">
                            <img classname="restaurant__Info__Img"/>
                            <ul>
                                <li classname="star">★</li>
                                <li className="minPrice">최소주문금액<span>{this.state.minprice}</span></li>
                                <li className="payment">결제<span>{this.state.payment}</span></li>
                                <li className="deliveryTime">배달시간<span>{this.state.deliveryTime}</span></li>
                            </ul>
                        </div>
                        
                        <div id="ownerMsg" className="ownerMsg" onClick={this.handleClick}>
                            <strong>사장님알림</strong>
                            <span>{this.state.ownerMsg}</span>
                        </div>
                    </div>
                    <HorizonMenu menuTabs={this.state.menuTabs} clickdata={this.state.ownerMsgClicked} passEvent={this.handleClick}/>
                    {menuTabItems}
                </div>
            </div>
        )
    }
}

export default RestaurantInfo
