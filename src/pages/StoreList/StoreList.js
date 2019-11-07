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
            categories: [],
            additionalRenderNum: 1,
            job: [],
        }
        // this.scrollHandler = this.scrollHandler.bind(this)
    }

    handleRender = (cat_id) => {
        // let { categoryId } = this.props.match.params
        axios(`http://10.58.3.24:8000/restaurant/category/${cat_id}?order_method=review_avg`)
            .then(res => {
                console.log("date from fetch===", res)
                this.setState({
                    restaurants: res.data.restaurants
                })
            })

        console.log("paramRendered===", this.props.match)

    }

    // scrollHandler = () => {
    //     console.log("run")
    //     let y = 500
    //     console.log("value of Y ===", y)
    //     let a = window.scrollY;
    //     if (a > y) {
    //         y = y + 2200;
    //         console.log("new Y===", y)
    //         this.setState({
    //             additionalRenderNum: this.state.additionalRenderNum + 1
    //         })
    //     }
    //     const { categoryId } = this.props.match.params;
    //     axios(`http://10.58.3.24:8000/restaurant/category/${categoryId}?order_method=review_avg&pageNum=${this.state.additionalRenderNum}`)
    //         .then(res => {
    //             console.log("new axios===", res)
    //             console.log(res.data.restaurants)
    //             const { restaurants } = this.state;
    //             this.setState({
    //                 restaurants: restaurants.concat(res.data.restaurants)
    //                 // job: res.data.job
    //             })
    //         })
    //     console.log("is scrollHandler working?===", this.state.additionalRenderNum)

    // }
    // shouldComponentUpdate = (nextState) => {
    //     if (this.state.restaurants !== nextState.restaurants) {
    //         return true;
    //     }
    // }
    componentDidMount() {
        axios('http://10.58.3.24:8000/restaurant')
            .then(res => {
                console.log(res)
                this.setState({ categories: res.data.categories })
            })

        axios(`http://10.58.3.24:8000/restaurant/category/1?order_method=review_avg&page=${this.state.additionalRenderNum}`)

            .then(res => {
                console.log("new axios===", res)
                this.setState({
                    restaurants: res.data.restaurants
                })
            })


        //success case 1
        //==============================
        // let position = 0
        // window.addEventListener("scroll", () => {
        //     console.log("test", window.scrollY)
        //     if (window.scrollY > 400 + position) {
        //         position = window.scrollY
        //         this.scrollHandler(window.scrollY)
        //     }
        // })

        //=================================

        // )
        // window.addEventListener("scroll", () => {
        //     this.scrollHandler(y);
        // })
        // let { categoryId } = this.props.match.params
        // axios(`http://10.58.3.24:8000/restaurant/category/${data}?order_method=review_avg`)
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             restaurants: res.data.restaurants
        //         })
        //     })
    }

    render() {
        console.log("param===", this.props.match)
        console.log("2222====", this.state)

        let categoriesNav = ""
        if (this.state.categories) {
            categoriesNav = this.state.categories.map(data => (
                <StoreCategories click={this.handleRender} info={data} />
            )
            )
        }
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
                    {categoriesNav}
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
