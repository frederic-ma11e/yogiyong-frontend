import React, { Component } from "react";
import removeBtn from "../../../Images/remove.png"
import decrementBtn from "../../../Images/minus.png"
import incrementBtn from "../../../Images/plus.png"
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions"
import "./SideCartMenu.scss"

class SideCartMenu extends Component {
  
  render() {

    const {name, total_price, count, id} = this.props.data

    return (

      <div className="menu-item">
        <div className="menu-item__wrapper">
          <div className="menu-item__name">
            {name}
          </div>
          <div className="menu-item__controller">
            <div className="menu-item__bottom-left">
              <img 
                onClick={() => this.props.onMenuRemoved(id)} 
                src={removeBtn} 
                className="menu-item__delete-icon menu-item__icon">

              </img>
            <div className="menu-item__price">
                {total_price}원
            </div>
          </div>
            <div className="menu-item__bottom-right">
              <img 
                onClick={() => this.props.onMenuDecremented(id)} 
                src={decrementBtn} 
                className="menu-item__decrement-icon menu-item__icon">

              </img>
            <div className="menu-item__current-quantity">
              {count}
            </div>
            <img 
              onClick={() => this.props.onMenuIncremented(id)} 
              src={incrementBtn} 
              className="menu-item__increment-icon menu-item__icon">

            </img>
          </div>
        </div>
      </div>
    </div>
      );
  }
}

const mapStateToProps = state => {
  return {
      menus: state.menus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMenuIncremented: (menu_id) => dispatch({ type: actionTypes.INCREMENT_MENU, incremented_menu_id : menu_id}),
    onMenuDecremented: (menu_id) => dispatch({ type: actionTypes.DECREMENT_MENU, decremented_menu_id : menu_id}),
    onMenuRemoved: (menu_id) => dispatch({ type: actionTypes.REMOVE_MENU, removed_menu_id: menu_id}),
    onMenuAdded: (menu) => dispatch({ type: actionTypes.ADD_MENU, added_menu : menu })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideCartMenu);
