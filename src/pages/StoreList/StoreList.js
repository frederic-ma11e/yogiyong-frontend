import React from 'react';
import Store from '../../Components/StoreListPage/Store'
import './StoreList.scss'

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
                    <Store />
                </div>
            </div>
        )
    }
}


export default StoreList; 