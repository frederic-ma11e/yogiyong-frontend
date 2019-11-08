import React from 'react';
import './ResetModal.scss';

const ResetModal = ({ isOpen, close }) => {
    console.log(isOpen)
    return (
      <React.Fragment>
      {
        isOpen ?
        <React.Fragment>
              <div className="Modal-overlay" onClick={close}/>
            <div className="resetModalContainer">
                <div className="resetModalTitle">요기요<div className="closeImg" onClick={close}/></div>
                <div className="resetModalBody">주문 메뉴를 모두 삭제하시겠습니까?</div>
                <div className="resetFooter">
                    <div className="cancelBtn" onClick={close}>취소</div>   
                    <div className="okBtn" >확인</div>
                </div>
            </div>
    </React.Fragment>
    :null
}
</React.Fragment>
)
}
export default ResetModal;