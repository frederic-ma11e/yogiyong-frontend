import React, { Component } from 'react'
//import Modal from 'react-modal';
import './resetModal.scss'

export class resetModal extends Component {


    render() {
        return (
            <div>
                    <div className="resetModalContainer">
                        <div className="resetModalTitle">요기요<div className="closeImg" onClick={this.clickClose}/></div>
                        <div className="resetModalBody">주문 메뉴를 모두 삭제하시겠습니까?</div>
                        <div className="resetFooter">
                            <div className="cancelBtn" onClick={this.clickCancel}>취소</div>
                            <div className="okBtn" onClick={this.clickOk}>확인</div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default resetModal
