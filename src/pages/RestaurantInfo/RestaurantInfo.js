
import React, { Component } from 'react'
import Header from '../../Components/Header'
import './RestaurantInfo.scss'
import HorizonMenu from '../../Components/RestaurantInfoPage/HorizonMenu'
import Infodetail from '../../Components/RestaurantInfoPage/Infodetail'
import PhotoMenuContainer from '../../Components/RestaurantInfoPage/PhotoMenuContainer'
import '../../Components/RestaurantInfoPage/HorizonMenu.scss'
import RestaurantInfoCategory from '../../Components/RestaurantInfoCategory'
import Footer from '../../Components/Footer'
import SideCart from "../../Components/FoodOrderPage/FoodOrderList/SideCart";

class RestaurantInfo extends Component {

  constructor() {
    super();
    this.state = {
      restaurantInfo: null,
      paymentInfo: null,
      popularMenuInfo: null,
      foodOrder: "",
      menuTabs: {
        menuTab: true,
        reviewTab: false,
        infoTab: false
      }
    };
  }

  // componentDidMount() {
  //   fetch("http://10.58.3.24:8000/restaurant/1")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(res => {
  //       this.setState({
  //         restaurantInfo: res.restaurant,
  //         paymentInfo: res.payment_methods,
  //         popularMenuInfo: res.all_menus[0].menus
  //       });
  //     });
  // }

  handleClick = tab => {
    if (tab === "ownerMsg") {
      let updatedMenuTabs = { ...this.state.infoTab }; //copy &paste
      updatedMenuTabs["menuTab"] = false;
      updatedMenuTabs["reviewTab"] = false;
      updatedMenuTabs["infoTab"] = true;
      this.setState({ menuTabs: updatedMenuTabs });
    }
    if (tab === "menuTab") {
      let updatedMenuTabs = { ...this.state.menuTabs };
      updatedMenuTabs["menuTab"] = true;
      updatedMenuTabs["reviewTab"] = false;
      updatedMenuTabs["infoTab"] = false;

      this.setState({ menuTabs: updatedMenuTabs });
    }
    if (tab === "reviewTab") {
      let updatedMenuTabs = { ...this.state.reviewTab };
      updatedMenuTabs["menuTab"] = false;
      updatedMenuTabs["reviewTab"] = true;
      updatedMenuTabs["infoTab"] = false;

      this.setState({ menuTabs: updatedMenuTabs });
    }
    if (tab === "infoTab") {
      let updatedMenuTabs = { ...this.state.infoTab };
      updatedMenuTabs["menuTab"] = false;
      updatedMenuTabs["reviewTab"] = false;
      updatedMenuTabs["infoTab"] = true;
    }
  }

    componentDidMount() {

        let pathName = document.location.pathname;
        let id = pathName.split("/")[2]
    
        fetch(`http://10.58.3.24:8000/restaurant/${id}`)
        .then(res=>{
            return res.json()})
        .then(res =>
            {
            console.log("-----------RestaurantInfo------------")
            console.log(res)
            if(res.all_menus.length !== 0) {
              this.setState({
                  restaurantInfo : res.restaurant,
                  paymentInfo: res.payment_methods,
                  popularMenuInfo: res.all_menus[0].menus
              })
            } else {
              this.setState({
                restaurantInfo : res.restaurant,
                paymentInfo: res.payment_methods,
            })
            }
    })
    }


  // componentDidMount(){
  setFoodOrder = order => {
    console.log(order)
    if (order.length !== 0) {
      this.setState({ foodOrder: order });
    }
  }

    handleClick=(tab)=>{
        //console.log(this.state)
        if(tab==="ownerMsg"){
            //console.log("clicked")
            let updatedMenuTabs = {...this.state.infoTab} //copy &paste
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = true
            this.setState({menuTabs : updatedMenuTabs});
            
        }
        if(tab==="menuTab"){
            let updatedMenuTabs = {...this.state.menuTabs}
            updatedMenuTabs["menuTab"] = true
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = false
            
            this.setState({menuTabs : updatedMenuTabs});
        
        }
        if(tab==="reviewTab"){
            let updatedMenuTabs = {...this.state.reviewTab}
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = true
            updatedMenuTabs["infoTab"] = false

            this.setState({menuTabs : updatedMenuTabs});
            
        }
        if(tab==="infoTab"){
            let updatedMenuTabs = {...this.state.infoTab}
            updatedMenuTabs["menuTab"] = false
            updatedMenuTabs["reviewTab"] = false
            updatedMenuTabs["infoTab"] = true

            this.setState({menuTabs : updatedMenuTabs});
            // this.setState({menuTab:false, reviewTab:false, infoTab:true});
        }
    }
    

    render() {
        let menuTabItems = "";
    let menuTabDetails = "";
    if (this.state.menuTabs.menuTab) {
      menuTabItems = <PhotoMenuContainer data={this.state.popularMenuInfo} />;
      menuTabDetails = (
        <RestaurantInfoCategory setFoodOrder={this.setFoodOrder} />
      );
    }
    if (this.state.menuTabs.infoTab) {
      menuTabItems = <Infodetail info={this.state.restaurantInfo} />;
    }
        
        //style={{backgroundImage:`url(${this.props.image})`}}

        let paymentInfos = ""
        if(this.state.paymentInfo) {
            paymentInfos = this.state.paymentInfo.map(el => {
            if(el === "creditcard") {
                return <span className="paymentMethod">신용카드</span>
            } else if(el === "online") {
                return <span className="paymentMethod">온라인</span>
            }
        })
        }
        
        return (
            <div className='wholeRestaurantContainer'>
                <Header />
                
                {(this.state.restaurantInfo && this.state.paymentInfo )&& ( // this.state.dataInfo 값이 있을때만 실행
                <div className="restaurantInfo-Flex">
                    <div className="restaurantContainer">
                    <div className="restaurant">
                        <div className="restaurant__title">
                            <span>{this.state.restaurantInfo.name}</span>
                        </div>
                        
                       <div className="restaurant__Info">
                            <img classname="restaurant__Info__Img" src={`https://www.yogiyo.co.kr/${this.state.restaurantInfo.logo_url}`}/>
                            <ul>
                                <li classname="star">
                                    { parseInt(this.state.restaurantInfo.review_avg)=="1" ? (
                                        <div className="reviewStars1"/>
                                    ): parseInt(this.state.restaurantInfo.review_avg)=="2"? (
                                        <div className="reviewStars2"/>
                                    ): parseInt(this.state.restaurantInfo.review_avg)=="3" ? (
                                        <div className="reviewStars3"/>
                                    ): parseInt(this.state.restaurantInfo.review_avg)=="4" ? (
                                       <div className="reviewStars4"/>
                                    ):parseInt(this.state.restaurantInfo.review_avg)=="5"? (
                                        <div className="reviewStars5"/>
                                    ):(
                                        <div></div>
                                    )
                                } <span>{this.state.restaurantInfo.review_avg}</span></li>
                                <li className="minPrice">최소주문금액<span>{Math.floor(this.state.restaurantInfo.threshold)}원</span></li>
                                <li className="payment">결제{this.state.paymentInfo && paymentInfos}<span className="paymentMethod paymentRed">요기서결제</span></li>
                                <li className="deliveryTime">배달시간<span>{this.state.restaurantInfo.estimated_delivery_time}</span></li>
                            </ul>
                        </div>
                        
                        <div id="ownerMsg" className="ownerMsg" onClick={()=>{this.handleClick("infoTab")}}>
                            <strong>사장님알림</strong>
                            <span>{this.state.ownerMsg}</span>   {/* 나중에 수정 */}
                        </div>
                    </div>
                    <HorizonMenu menuTabs={this.state.menuTabs} 
                    clickdata={this.state.ownerMsgClicked} 
                    passEvent={this.handleClick} 
                    reviewNum={this.state.restaurantInfo.review_count} />

                    {menuTabItems}
                    {/* {reviewTabItems} */}
                    {menuTabDetails}
                </div>
                <SideCart
                data={this.state.foodOrder}
                // info={this.state.restaurantInfo}
              />
                </div>

                )}
                <Footer/>
                </div>
    );
  }
}


export default RestaurantInfo;
