import React, { Component } from "react";
import yogiyoDownImage from "Images/yogiyo-down-img.PNG";
import "./Footer.scss";
import "Styles/common.scss";
class FooterCompanyInfo extends Component {
  render() {
    const { title, desc, desc2, desc3 } = this.props.data;
    return (
      <div className="company-wrap">
        <div className="company-info">
          <img className="company-logo" src={yogiyoDownImage} />
          <p>
            <strong>{title}</strong>
            {desc}
            <br />
            {desc2}
            <br />
            {desc3}
          </p>
        </div>
      </div>
    );
  }
}

export default FooterCompanyInfo;
