import React from 'react';
import Store from '../../Components/StoreListPage/Store'
class StoreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="store-list-background" >
                <div className="store-list-container">
                    {/* <Store /> -> 음식점 하나짜리 */}
                    <span>
                        <img>
                        </img>
                    </span> -> 이미지 url 넘어옴
                </div>
            </div>
        )
    }
}


export default StoreList; 