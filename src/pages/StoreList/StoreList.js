import React, { Fragment } from 'react';
import StoreInformation from 'Components/StoreInformation'
import './StoreList.scss'
import StoreCategories from 'Components/StoreCategories'
import Magnifier from 'Images/magnifier.png'

class StoreList extends React.Component {
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

    // handleRender = () => {
    //     const { categoryId } = this.props.match.params;
    //     fetch(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg`)
    //         .then(res => res.json())
    //         .then(res =>
    //             this.setState({
    //                 restaurants: res.restaurants
    //             }))
    // }

    componentDidMount() {
        const { categoryId } = this.props.match.params;
        fetch(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg`)
            .then(res => res.json())
            .then(res =>
                this.setState({
                    restaurants: res.restaurants
                }))
    }

    // .then( res => console.log(res))
    //     // .then( res => res.map( info => 

    // })

    //     // .then(response => response.json())
    // .then(res => console.log("fetch===", res))
    //     console.log("111111======", this.state)


    render() {
        console.log("param===", this.props.match)
        console.log("2222====", this.state)
        return (
            <>
                <div className="store-list__category">
                    <div>
                        {/* <img className = "magnifier" src={Magnifier}>
                    </img> */}
                        <label id="9">
                            <img className="magnifier" src={Magnifier} id="9">
                            </img>
                        </label>
                    </div>
                    {this.state.categories.map(data => (
                        <StoreCategories info={data} />
                    ))}
                </div>
                <div className="store-list">
                    {this.state.restaurants.map((info, index) => (
                        <StoreInformation key={index} data={info} />
                    ))}
                    {/* <StoreInformation data={this.state.storeInformation}/>
                <StoreInformation /> */}
                </div>
            </>

        )
    }
};
export default StoreList;