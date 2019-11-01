import React from 'react';

class StoreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storelist: [
                {
                    storeLogo: "",
                    storeName: "",
                    storeRate: "",
                    storeReview: "",
                    storeReply: "",
                    storePayMethod: "",
                    storeMinPrice: "",
                    storeTag1: "",
                    storeTag2: "",
                    sotreTag3: "",
                    storeTimeExpect: "",

                }
            ]
        }
    }

    render() {
        return (
            <div className="store-list-container" >
                <div className="store-list-outer">
                    {/* <componenet /> 음식점 1453곳 찾았습니다 // 정렬 창
                    <component /> 음식점 컴포넌트*/}  
                </div>
            </div>
        )
    }
}


export default StoreList;