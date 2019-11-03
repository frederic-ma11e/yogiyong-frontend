import React, { Fragment } from 'react';
import StoreInformation from '../StoreInformation/StoreInformation.js'
import './Store.scss'
import StoreCategories from '../StoreCategories/StoreCategories.js'

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
            ]
        }
    }

    componentDidMount() {
        fetch('http://10.58.5.84:8000/restaurant/category/1')
            .then(res => res.json())
            // .then( res => console.log(res))
            .then(res =>
                // .then( res => res.map( info => 
                this.setState(
                    res
                )
            )
        // .then(response => response.json())
        // .then(response => console.log(response))
        console.log("111111======", this.state)
    }

    render() {
        console.log("2222====", this.state)
        return (
            <Fragment>
                <nav>
                    <StoreCategories />
                </nav>
                
                <div className="experiment">
                    {this.state.restaurants.map((info, index) => (
                        <StoreInformation key={index} data={info} />
                    ))}
                    {/* <StoreInformation data={this.state.storeInformation}/>
                <StoreInformation /> */}
                </div>
            </Fragment>

        )
    }
};
export default Store;