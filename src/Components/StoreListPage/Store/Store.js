import React, { Fragment } from 'react';
import StoreInformation from '../StoreInformation/StoreInformation.js'
import './Store.scss'
import StoreCategories from '../StoreCategories/StoreCategories.js'
import Image from '../../../Images/store1.jpg'

class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
                {
                    logo_url: Image,
                    name: "버거킹",
                    review_avg: 5.0,
                    review_count: 1714,
                    threshold: 12000
                },
                {
                    logo_url: Image,
                    name: "버거킹",
                    review_avg: 5.0,
                    review_count: 1714,
                    threshold: 12000
                }

            ],
            categories: [
                {
                    id: 1,
                    name: "1인분주문"
                },
                {
                    id: 2,
                    name: "프랜차이즈"
                },
                {
                    id: 3,
                    name: "치킨"
                },
                {
                    id: 4,
                    name: "피자양식"
                },
                {
                    id: 5,
                    name: "중식"
                },
                {
                    id: 6,
                    name: "한식"
                },
                {
                    id: 7,
                    name: "일식돈까스"
                },
                {
                    id: 8,
                    name: "족발보쌈"
                },
                {
                    id: 9,
                    name: "야식"
                },
                {
                    id: 10,
                    name: "분식"
                },
                {
                    id: 11,
                    name: "카페디저트"
                },
                {
                    id: 12,
                    name: "편의점"
                }
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
    //     // .then(response => response.json())
    //     // .then(response => console.log(response))
    //     console.log("111111======", this.state)
    }

    render() {
        console.log("2222====", this.state)
        return (
            <Fragment>
                <div className="store-list__category">
                    <StoreCategories />
                </div>
                
                <div className="store-list">
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