import React from 'react';
import StoreInformation from '../StoreInformation/StoreInformation.js'
import './Store.scss'
import Image from '../../../Images/store1.jpg'

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storeInformation: [
                {
                    storeLogo: Image ,
                    storeName: "직화반상 by셰플리 (강남)",
                    storeRate: "4.5",
                    storeReview: "1126",
                    storeReply: "1062",
                    storePayMethod: "요기서 결제",
                    storeMinPrice: "8,000",
                    storeTagDiscount: "",
                    storeTagCesco: "",
                    sotreTagAdditionalDiscount: "",
                    storeDelivTime: "40~50분",
                },
                {
                    storeLogo:  Image ,
                    storeName: "직화반상 by셰플리 (강남)",
                    storeRate: "4.5",
                    storeReview: "1126",
                    storeReply: "1062",
                    storePayMethod: "요기서 결제",
                    storeMinPrice: "8,000",
                    storeTagDiscount: "",
                    storeTagCesco: "",
                    sotreTagAdditionalDiscount: "",
                    storeDelivTime: "40~50분",
                },
                {
                    storeLogo:  Image ,
                    storeName: "직화반상 by셰플리 (강남)",
                    storeRate: "4.5",
                    storeReview: "1126",
                    storeReply: "1062",
                    storePayMethod: "요기서 결제",
                    storeMinPrice: "8,000",
                    storeTagDiscount: "",
                    storeTagCesco: "",
                    sotreTagAdditionalDiscount: "",
                    storeDelivTime: "40~50분",
                },
                {
                    storeLogo: Image,
                    storeName: "직화반상 by셰플리 (강남)",
                    storeRate: "4.5",
                    storeReview: "1126",
                    storeReply: "1062",
                    storePayMethod: "요기서 결제",
                    storeMinPrice: "8,000",
                    storeTagDiscount: "",
                    storeTagCesco: "",
                    sotreTagAdditionalDiscount: "",
                    storeDelivTime: "40~50분",
                },
                {
                    storeLogo: Image,
                    storeName: "직화반상 by셰플리 (강남)",
                    storeRate: "4.5",
                    storeReview: "1126",
                    storeReply: "1062",
                    storePayMethod: "요기서 결제",
                    storeMinPrice: "8,000",
                    storeTagDiscount: "",
                    storeTagCesco: "",
                    sotreTagAdditionalDiscount: "",
                    storeDelivTime: "40~50분",
                },
            ]
        }
    }
    render() {
        return (
            <div className="experiment">
                {this.state.storeInformation.map((info, index) => (
                    <StoreInformation key={index} data={info} />
                ))}
                {/* <StoreInformation data={this.state.storeInformation}/>
                <StoreInformation /> */}
            </div>

        )
    }
};
export default Store;