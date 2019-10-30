import React from "react";

const FooterServiceInfo =() =>{
    return (
      <div className="service-info">
        <div className="service-info-bpg">
          <div className="footer-image" />
          <span>요기요<br/>안심센터</span>
        </div>
        <div className="service-info-clean">
          <div className="footer-image" />
          <span>요기요100%<br/>클린리뷰</span>
        </div>
        <div className="service-info-csc">
          <em>고객 만족센터</em>
          <strong>02-3447-3612</strong>
          <span>24시간, 연중무휴</span>
        </div>
      </div>
    );
}

export default FooterServiceInfo;