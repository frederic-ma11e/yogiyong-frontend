import React, { Component } from "react";
import yogiyoDownImage from "Images/yogiyo-down-img.PNG";
import "./Footer.scss";
import "Styles/common.scss";
class FooterCompanyInfo extends Component {
  render() {
    const { title } = this.props.data;
    const divider = <span className="divider">|</span>;
    return (
      <div className="company-wrap">
        <div className="company-info">
          <img className="company-logo" src={yogiyoDownImage} />
          <p>
            <strong>{title}</strong>
            서울시 서초구 서초대로38길 12 마제스타시티 타워2 17층대표자 : 강신봉{divider}사업자등록번호:211-88-68802 사업자정보확인 통신판매업신고:제 2018-서울서<br/>
            초-2635호{divider}개인정보담당자 : privacy@yogiyo.co.kr{divider}제휴문의 : partnership@deliveryhero.co.kr{divider}고객만족센터 : support@yogiyo.co.kr{divider}호스트서비스사업자:<br/>
            (주)심플렉스인터넷
          </p>
        </div>
      </div>
    );
  }
}

export default FooterCompanyInfo;
