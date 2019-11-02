import React from 'react';

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storeInformation1: [
                {
                storeLogo: "url",
                storeName: "text",
                storeRate: "img + numer(소수점 1자리)",
                storeReview: "Text + #",
                storeReply: "text+ #",
                storePayMethod: "text div or span",
                storeMinPrice: "# + text",
                storeTagDiscount: "text +#",
                storeTagCesco: "img div or span",
                sotreTagAdditionalDiscount: "",
                storeDelivTime: "string",
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <span className = "store-list__store-main">
                    <img>
                    </img>
                    <span>

                    </span>
                    <span>

                    </span>
                </span>
                <span>

                </span>

            </div>

        )
    }
};
export default Store;