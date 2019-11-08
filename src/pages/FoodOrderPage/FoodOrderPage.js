import React, { Component } from 'react';
import Header from 'Components/Header';
import './FoodOrderPage.scss';
import FoodOrderContainer from 'Components/FoodOrderPage/FoodOrderContainer';
import Footer from 'Components/Footer';
import OrderList from 'Components/FoodOrderPage/FoodOrderList/OrderList';

class FoodOrderPage extends Component {
  state={
    y:'',
    pageHeight:''
  }
  
  handlesScroll = () =>{
    this.setState({
      // pageHeight:document.querySelector('.root').clientHeight 
    })
  }
  
  componentDidMount(){
    window.addEventListener("scroll",this.handlesScroll)

    this.setState({
      clientHeight: document.querySelector(".food-order-main").clientHeight
  }) 
  }

 

  render() {
    const { clientHeight, pageHeight }=this.state
    return (
      <div className="root">
        <Header/>
          <div className="food-order-main">
            <FoodOrderContainer />
            <OrderList clientHeight={clientHeight} pageHeight={pageHeight}/>
          </div>
          <div className="food-order-footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default FoodOrderPage;