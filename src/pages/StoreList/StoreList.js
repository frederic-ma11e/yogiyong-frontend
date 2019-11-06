import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import StoreInformation from 'Components/StoreInformation'
import './StoreList.scss'
import StoreCategories from 'Components/StoreCategories'
import Magnifier from 'Images/magnifier.png'
import axios from 'axios';

class StoreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
                {}
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
            ],

            additionalRenderNum: 1,
            job: [],
        }
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    handleRender = () => {
        const { categoryId } = this.props.match.params;
        axios(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg`)
            .then(res => {
                console.log(res)
                this.setState({
                    restaurants: res.data.restaurants
                })
            })
    }
    scrollHandler = () => {
        let y = 400
        console.log("value of Y ===", y)
        let a = window.scrollY;
        if (a > y) {
            y = y + 800;
            console.log("new Y===", y)
            this.setState({
                additionalRenderNum: this.state.additionalRenderNum + 1
            })
        }
        const { categoryId } = this.props.match.params;
        axios(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg&pageNum=${this.state.additionalRenderNum}`)
            .then(res => {
                console.log("new axios===", res)
                console.log(res.data.restaurants)
                const { restaurants } = this.state;
                this.setState({
                    restaurants: restaurants.concat(res.data.restaurants)
                    // job: res.data.job
                })
            })
        console.log("is scrollHandler working?===", this.state.additionalRenderNum)

    }

    componentDidMount() {
        // const { categoryId } = this.props.match.params;
        // axios(`http://10.58.2.209:8000/restaurant/category/${categoryId}?order_method=review_avg&page=${this.state.additionalRenderNum}`)
        // .then(res => res.json())

        // .then(res => {
        //     console.log("new axios===", res)
        //     this.setState({
        //         restaurants: res.data.restaurants
        //     })
        // })


        //success case 1
        //==============================
        let position = 0
        window.addEventListener("scroll", () => {
            console.log("test", window.scrollY)
            if (window.scrollY > 400 + position) {
                position = window.scrollY
                this.scrollHandler(window.scrollY)
            }
        })

        //=================================

        // )
        // window.addEventListener("scroll", () => {
        //     this.scrollHandler(y);
        // })
    }

    render() {
        console.log("param===", this.props.match)
        console.log("2222====", this.state)
        return (
            <>
                <div>
                    {this.state.job.position}
                </div>
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
                        <StoreCategories click={this.handleRender} info={data} />
                    ))}
                </div>
                {this.state.restaurants &&

                    <div className="store-list">
                        {this.state.restaurants.map((info, index) => (
                            <StoreInformation key={index} data={info} />
                        ))}
                    </div>


                }
            </>

        )
    }
};
export default withRouter(StoreList);