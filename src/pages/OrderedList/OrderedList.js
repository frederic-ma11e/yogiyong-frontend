import React, {Component} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Order from "./Order";
import {OrderData} from "./OrderData"
import "./OrderedList.scss";

class OrderedList extends Component {

    state = {
        ordered_list : OrderData
    }

    render() {

        let orders = ""
        if(this.state.ordered_list) {
            orders = this.state.ordered_list.map(el => <Order orderData = {el}/> )
        }

        return (
            <>
            <Header />
                <div className="ordered-list-container">
                    <div className="ordered-list">
                        <div className="ordered-list__header">
                            <div className="ordered-list__title">
                                회원주문내역
                            </div>
                        </div>
                        <div className="ordered-list__orders-wrapper">
                            <div className="ordered-list__orders">
                                {orders}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
            </>
        )
    }
}

export default OrderedList;