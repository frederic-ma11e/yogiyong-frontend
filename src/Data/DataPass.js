import React, { Component } from 'react';
import FoodOrderCheckList from '../Components/FoodOrderPage/FoodOrderCheckList';
import FoodOrderModal from '../Components/FoodOrderModal';

class DataPass extends Component {

  state={
    data:[]
  }

  render() {
    return (
      <div>
        <FoodOrderCheckList onClick = {this.handleClick}/>
        <FoodOrderModal />
      </div>
    );
  }
}

export default DataPass;