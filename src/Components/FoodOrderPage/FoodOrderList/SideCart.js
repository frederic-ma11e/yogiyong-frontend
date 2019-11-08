import React, { Component } from "react";
import "./SideCart.scss";
import { withRouter } from 'react-router-dom';
import SideCartMenu from "./SideCartMenu";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions"
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

  goToOrderPage = () => {
    this.props.history.push('/food-order');
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }


  render() {

    let menus = "";

    console.log("============SideCart===============")
    console.log(this.props.menus)

    if(this.props.menus) {
        menus = this.props.menus.map(el => 
          <SideCartMenu 
            data={el} />)
    }
      
    return (
      <div className="sideCartContainer">
        <div className="sideCartContainer__title">
          주문표
          <div className="trashBin" onClick={this.openModal}/>
          <ResetModal isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>

        <div className="sideCartContainer__List">
          {this.props.menus.length == 0 &&
            <div className="emptyOrderList">주문표에 담긴 메뉴가 없습니다.</div>
          }
          {menus}
        </div>
        <div className="sideCartContainer__result">
          <div className="price-label">
            합계 :
          </div>
          <div className="price">
              {Number(this.props.totalPrice)}원
          </div>
        </div>
        <button className="sideCartContainer__order-btn" onClick={this.goToOrderPage}>주문하기</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      menus : state.menus,
      totalPrice : state.total_price
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMenuIncremented: (menu_id) => dispatch({ type: actionTypes.INCREMENT_MENU, incremented_menu_id : menu_id}),
    onMenuDecremented: (menu_id) => dispatch({ type: actionTypes.DECREMENT_MENU, decremented_menu_id : menu_id}),
    onMenuAdded: (menu) => dispatch({ type: actionTypes.ADD_MENU, added_menu : menu }),
    onMenuRemoved: (menu) => dispatch({ type: actionTypes.REMOVE_MENU, removed_menu: menu})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideCart));
