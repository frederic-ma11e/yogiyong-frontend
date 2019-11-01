import React, {Component} from "react";
import RestaurantInfoCMenu from "./RestaurantInfoCMenu";

class RestaurantInfoCList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: this.props.info.mode,
            position: ""
        };
    }

    handleClick = () => {
        if (this.state.mode === "none") {
            this.setState({mode: "", position: "-184px -43px"});
        } else {
            this.setState({mode: "none", position: "-149px -43px"});
        }
    };
    render() {
        const {title, menu} = this.props.info;
        const categoryList = menu.map(
            (info, index) => (<RestaurantInfoCMenu key={index} info={info}/>)
        );
        return (
            <div>
                <div
                    className="restaurantInfo-category-container"
                    onClick={this.handleClick}
                    name={this.props.info.id}>
                    <span>{title}</span>
                    <div className="arrow-icon" style={{ backgroundPosition: this.state.position}}/>
                </div>
                <div style={{ display: this.state.mode }}>
                    {categoryList}
                </div>
            </div>
        );
    }
}

export default RestaurantInfoCList;
