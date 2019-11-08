import React, { Component } from "react";
import "./SideCart.scss";
import SideCartMenu from "./SideCartMenu";
//import ResetModal from "../../RestaurantInfoPage/ResetModal";
// import Modal from './Modal.js'
import ResetModal from "./ResetModal";



class SideCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      foodDada:false,
      foodOrder2:"",

      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }



//this.props.foodOrder
  clickedMinusBtn = () => {
    if (this.state.count !== 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  clickedPlusBtn = () => {
    this.setState({ count: this.state.count + 1 });
  };
  orderBtn = () => {
    this.setState({ opacity: 1 });
  };

//   componentDidUpdate() {
//     console.log("===========SideCart===========")
//     console.log(this.props.data)
//     if(this.props.data) {
//         this.setState({
//             foodOrder2:this.props.data[0]
//         })
//     }
//   }

  // openModal=()=>{
  //       <ResetModal
  //         resetOpen={this.state.resetModal} 
  //         resetClose={this.state.closeResetModal}
  //         onClick={this.state.openResetModal}/>
  // }

  render() {

    console.log(this.props.data)

    let menu = ""
    if(this.props.data) {
        menu = this.props.data.map(el => 
            <SideCartMenu data={el}/>
            )
    }

      
    return (
      <div className="sideCartContainer">
        <div className="sideCartContainer__title">
          주문표
          {/* <div className="trashBin" onClick={(this.state.canClick && <ResetModal
          resetOpen={this.state.resetModal} 
          resetClose={this.state.closeResetModal}
          onClick={this.state.openResetModal}/>) || null}/>
           */}
        <div className="trashBin" onClick={this.openModal}/>
        <ResetModal isOpen={this.state.isModalOpen} close={this.closeModal} />
           
          
        </div>

        <div className="sideCartContainer__emptyList">
          <div className="emptyOrderList">주문표에 담긴 메뉴가 없습니다.</div>
          <div className="deliveryFee">배달요금원 별도 </div>
          {/* {Math.floor(this.props.info.delivery_fee)} */}
        </div>
        <div>{menu}</div>
        <div className="sideCartContainer__List">
        </div>
        
      </div>
    );
  }
}

export default SideCart;
