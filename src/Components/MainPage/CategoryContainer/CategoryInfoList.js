import React, { Component } from "react";
import CategoryInfo from "./CategoryInfo";
import { withRouter } from "react-router-dom";

class CategoryInfoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [

      ]
    }
  }

  handleClick = () => {
    this.setState = {

    }
  }

  render() {
    const { data } = this.props;
    const list = data.map((info, index) => (
      <CategoryInfo key={index} data={info} />
    ));
    return <div>{list}</div>;
  }
}

export default withRouter(CategoryInfoList);