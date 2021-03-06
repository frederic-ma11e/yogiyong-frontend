import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import StoreInformation from 'Components/StoreInformation'
import './StoreList.scss'
import StoreCategories from 'Components/StoreCategories'
import Magnifier from 'Images/icons.png'
import axios from 'axios';
import Header from 'Components/Header'
import SearchContainer from 'Components/MainPage/SearchContainer'
import Footer from 'Components/Footer'
import { Link } from 'react-router-dom'
import StoreRangeSelectBox from '../StoreRangeSelectBox/StoreRangeSelectBox'
import GoogleMaps from "../../Components/GoogleMaps/GoogleMaps"

class StoreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [
                {}
            ],
            categories: [],
            additionalRenderNum: 0,
            tags: "",
            cesco: false
        }
    }

    handleRender = (cat_id) => {
        axios(`http://10.58.4.208:8000/restaurant/category/${cat_id}?order_method=review_avg&pageNum=0`)
            .then(res => {
                console.log("date from fetch===", res)
                this.setState({
                    restaurants: res.data.restaurants,
                    additionalRenderNum: 0,
                })
            })

        console.log("paramRendered===", this.props.match)

    }

    handleScroll = (position) => {
        if (position > document.body.scrollHeight) {
            position = position + window.scrollY
            this.setState({
                additionalRenderNum: this.state.additionalRenderNum + 1
            })
        }
        const { categoryId } = this.props.match.params
        axios(`http://10.58.4.208:8000/restaurant/category/${categoryId}?order_method=review_avg&pageNum=${this.state.additionalRenderNum}`)
            .then(res => {
            
                if (res.data.restaurants) {
                    this.setState({
                        restaurants: this.state.restaurants.concat(res.data.restaurants),

                    })
                }
                else if (res.data.RESULT = "NO_MORE_PAGE") {
                    this.setState({
                        restaurants: this.state.restaurants.concat()
                    })
                }
            })
        console.log(window.scrollY)

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        axios('http://10.58.4.208:8000/restaurant')
            .then(res => {
                this.setState({ categories: res.data.categories })
            })
        const { categoryId } = this.props.match.params
        axios(`http://10.58.4.208:8000/restaurant/category/${categoryId}?order_method=review_avg&pageNum=${this.state.additionalRenderNum}`)

            .then(res => {
                console.log("new axios===", res)
                this.setState({
                    restaurants: res.data.restaurants
                })
            })
       
        window.addEventListener("scroll", () => {
            let position = window.innerHeight + window.scrollY + 50
            if (position > document.body.scrollHeight) {
                this.handleScroll(position)
            }
        })

    }

    render() {
        console.log("param===", this.props.match)
        console.log("2222====", this.state.restaurants)

        let categoriesNav = ""
        if (this.state.categories) {
            categoriesNav = this.state.categories.map(data => (
                <StoreCategories click={this.handleRender} info={data} />
            )
            )
        }
        return (
            <>
                <Header />
                <SearchContainer />
                <div className="store-list__category">
                    <div className="magnifier-container">
                        <label id="9">
                            <div
                                className="magnifier"
                                src={Magnifier}
                                id="9"
                            >
                            </div>
                        </label>
                    </div>
                    <Link
                        to={`/storelist/1`}
                        onClick={() => this.handleRender(1)}
                    >

                        <div className="store-list__category__section" id="see-all-button">
                            전체보기
                        </div>

                    </Link>
                    {categoriesNav}
                </div>
                <div className="store-list__mini-header">
                    <div className="store-list__mini-header__left">
                        <div className="thisisforspace">
                            음식점
                        </div>
                        <div className="thisisjustforcolor">
                            {this.state.restaurants.length}
                        </div>
                        <div>
                            곳을 찾았습니다.
                        </div>
                    </div>
                    < StoreRangeSelectBox />
                </div>
                <div className="google-maps-wrapper">
                    <div className="google-maps">
                        {this.state.restaurants && <GoogleMaps restaurants={this.state.restaurants}/>}
                    </div>
                </div>
                {
                    this.state.restaurants &&

                    <div className="store-list">
                        {this.state.restaurants.map((info, index) => (
                            <StoreInformation key={index} data={info} />
                        ))}
                    </div>
                }
                <Footer />
            </>

        )
    }
};
export default withRouter(StoreList);
