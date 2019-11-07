import React, {Component} from "react"
import sample_image from "../../Images/category-02.png"


const order = props => {

    const {image_url, store_name, order_date, menus} = props.orderData;

    menus.pop();
    let menuItems = menus.map(el => <div className="ordered-list__menu">{el.title}</div>)

    return(
        <div className="ordered-list__order">
            <img src={sample_image} className="ordered-list__img"></img>
            <div className="ordered-list__info">
                <div className="ordered-list__info-wrapper">
                    <div className="ordered-list__rest-data">
                        <div className="ordered-list__name">
                            {store_name}
                        </div>
                        <div className="ordered-list__menus">
                            {menuItems}
                        </div>
                    </div>
                    <div className="ordered-list__order-data">
                        <div className="ordered-list__date">
                            주문일시 : {order_date}
                        </div>
                        <div className="ordered-list__delivered">
                            배달완료
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default order;
