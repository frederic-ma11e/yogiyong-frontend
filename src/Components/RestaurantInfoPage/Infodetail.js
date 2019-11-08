import React, { Component } from 'react'
import './Infodetail.scss'

export class Infodetail extends Component {
    constructor(){
        super()
        this.state={
            msg:'',
        }
    }
    render() {
        let ingredients__array=[]
        if(this.props.info.ingredients_origin){
            let ingrediendts=this.props.info.ingredients_origin;
            ingredients__array = ingrediendts.split('\t\r\n')
            }
            const result =ingredients__array.map(el=>{
                return <p>{el}</p>
            })
            


           return (
                <div className='infoContainer'>
                    <div className='infoItem'>
                        <div className="underLine">사장님 알림</div>
                        <div className="msg">{}</div>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">업체 정보</div>
                        <p><i className="infoTitle">영업시간</i><span>{this.props.info.open_time_description}</span></p>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">결제 정보</div>
                        <p><i className="infoTitle">최소주문금액</i><span>{this.props.info.delivery_fee_explanation}</span></p>
                        {/* <p><i className="infoTitle">결제수단</i><span>{this.props.info.}</span></p> */}
                    </div>
                    <div className="infoItem">
                        <div className="underLine">사업자 정보</div>
                        <p><i className="infoTitle">상호명</i><span>{this.props.info.company_name}</span></p>
                        <p><i className="infoTitle">사업자등록번호</i><span>{this.props.info.company_number}</span></p>
                    </div>
                    <div className="infoItem">
                        <div className="underLine">원산지 정보</div>
                        <p>{result}</p>
                        
                    </div>
                </div>
        )
    }
}

export default Infodetail
