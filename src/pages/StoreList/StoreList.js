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
            <div>
                <div>
                    <Store />
                </div>
            </div>
        )
    }
}


export default StoreList; 