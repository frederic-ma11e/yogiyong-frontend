import React, { Component } from "react";
import "./Footer.scss";
import "Styles/common.scss";
import data from "Data/Footer.js";
import FooterMenu from "./FooterMenu";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterServiceInfo from "./FooterServiceInfo";

class Footer extends Component {
  state = {
    info: data.info,
    companyInfo: data.companyInfo,
    lastInfo: data.lastInfo
  };
  render() {
    const { info, companyInfo, lastInfo } = this.state;
    return (
      <div className="footer-container">
        <FooterMenu data={info} className="footer-container-menu" />
        <FooterCompanyInfo data={companyInfo} />
        <FooterServiceInfo />
        <p className="footer-last-info">{lastInfo.desc}</p>
      </div>
    );
  }
}

export default Footer;
