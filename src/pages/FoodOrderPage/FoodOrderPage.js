import React, { Component } from 'react';
import Header from 'Components/Header';
import './FoodOrderPage.scss';
import FoodOrderContainer from 'Components/FoodOrderPage/FoodOrderContainer';
import Footer from 'Components/Footer';
import OrderList from 'Components/FoodOrderPage/FoodOrderList/OrderList';

class FoodOrderPage extends Component {
  state={
    y:'',
    pageHeight:'',
    address:'',
    detailAddress:'',
    phone:'',
    request:'',
    payment:''
  }

  setAddress = info=>{
    console.log(info)
    this.setState({ address: info });
  }
  detailAddress = info=>{
    console.log(info)
    this.setState({ detailAddress: info });
  }
  phone = info=>{
    console.log(info)
    this.setState({ phone: info });
  }

  setRequest = info =>{
    this.setState({request: info})
  }

  setPayment = (card,money) =>{
    if(card===1){
      this.setState(
        {payment:card}
      )}else{
        this.setState(
          {payment:money}
        ) 
      }
      
  }
  handlesScroll = () =>{
    this.setState({
      pageHeight:document.querySelector('.root').clientHeight 
    })
  }
  
  componentDidMount(){
    window.addEventListener("scroll",this.handlesScroll)

    this.setState({
      clientHeight: document.querySelector(".food-order-main").clientHeight
  }) 
  }

 

  render() {
    console.log(this.state.address , this.state.detailAddress, this.state.phone)
    const { clientHeight, pageHeight }=this.state
    return (
      <div className="root">
        <Header/>
          <div className="food-order-main">
            <FoodOrderContainer setAddress={this.setAddress} detailAddress={this.detailAddress} phone={this.phone} setRequest={this.setRequest} setPayment={this.setPayment}/>
            <OrderList clientHeight={clientHeight} pageHeight={pageHeight} 
            addressData={this.state.address}
            detailAddressData={this.state.detailAddress}
            phoneData={this.state.phone}
            requestData={this.state.request}
            paymentData={this.state.payment}/>
          </div>
          <div className="food-order-footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default FoodOrderPage;