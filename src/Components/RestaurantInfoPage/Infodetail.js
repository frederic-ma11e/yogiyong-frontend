import React, { Component } from 'react'
import './Infodetail.scss'

export class Infodetail extends Component {
    constructor(){
        super()
        this.state={
            msg:'',
            openTime:'11:00 - 22:00',
            minOrderPrice:'8,000원',
            payment:'신용카드 , 현금 , 요기서결제',
            restaurantTitle:'쫄면주는삼겹본능',
            restaurantPermissionNum:'123-456-789'
        }
    }
    render() {
        return (
                <div className='infoContainer'>
                    <div className='infoItem'>
                        <div className="underLine">사장님 알림</div>
                        <div className="msg">{this.state.msg}</div>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">업체정보</div>
                        <p><i className="infoTitle">영업시간</i><span>{this.state.openTime}</span></p>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">결제정보</div>
                        <p><i className="infoTitle">최소주문금액</i><span>{this.state.minOrderPrice}</span></p>
                        <p><i className="infoTitle">결제수단</i><span>{this.state.payment}</span></p>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">사업자정보</div>
                        <p><i className="infoTitle">상호명</i><span>{this.state.restaurantTitle}</span></p>
                        <p><i className="infoTitle">사업자등록번호</i><span>{this.state.restaurantPermissionNum}</span></p>
                    </div>
                </div>
        )
    }
}

export default Infodetail
