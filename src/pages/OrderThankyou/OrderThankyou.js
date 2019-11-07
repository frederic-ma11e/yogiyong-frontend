import React, {Component} from "react"
import "./OrderThankyou.scss"

class OrderThankyou extends Component {

    state = {
        order_info : [
            {
                label : "주문식당",
                content : "후라이드참잘하는집-대치점"
            },
            {
                label : "결제수단",
                content : "현장결제 - 신용카드결제"
            },
            {
                label : "주문자정보",
                content : "서울특별시 강남구 삼성동 143-40 위워크타워"
            },
            {
                content : "01012341234"
            },
        ],
        menus : [
            {
                title : "순살 후라이드: 콜라 1.25L 변경 X 1개",
                price : 16000
            },
            {
                title : "순살 후라이드: 콜라 1.25L 변경 X 1개",
                price : 16000
            },
            {
                title : "순살 후라이드: 콜라 1.25L 변경 X 1개",
                price : 16000
            },
            {
                title : "배달료",
                price : 1000
            }
        ]
    }

    render() {
        
        let orderInfo = this.state.order_info.map(el => 
            <div className="thankyou__middle-content">
                <div className="thankyou__order-label">
                    {el.label ? el.label : ""}
                </div>
                <div className="thankyou__order-content">
                    {el.content}
                </div>
            </div>
        )

        let menus = this.state.menus.map(el => 
            <div className="thankyou__bottom-content">
                <div className="thankyou__menu">
                    {el.title}
                </div>
                <div className="thankyou__price">
                    {el.price}원
                </div>
            </div>
        )

        return(
            
            <div className="thankyou-container">
                <div className="thankyou">
                    <div className="thankyou__header">
                        <div className="thankyou__title">
                            <div className="thankyou__title-text">
                                주문완료
                            </div>
                        </div>
                        <div className="thankyou__header-body">
                            <div className="thankyou__words">
                                주문 감사합니다
                            </div>
                            <div className="thankyou__liner">
                            </div>
                            <div className="thankyou__notice">
                                주문 요청이 완료되었으며 고객님의 휴대전화 번호로 주문 확인 문자가 곧 발송됩니다.
                            </div>
                        </div>
                    </div>
                    <div className="thankyou__middle">
                        <div className="thankyou__middle-header">
                            <div className="thankyou__middle-title">
                                배달정보
                            </div>
                        </div>
                        <div className="thankyou__middle-contents">
                            {orderInfo}
                        </div>
                    </div>
                    <div className="thankyou__bottom">
                        <div className="thankyou__bottom-header">
                            <div className="thankyou__bottom-title">
                                주문내역
                            </div>
                        </div>
                        <div className="thankyou__bottom-contents">
                            {menus}
                            <div className="thankyou__liner-wrapper">
                                <div className="thankyou__liner">
                                </div>
                            </div>

                            <div className="thankyou__bottom-content">
                                <div className="thankyou__total-price-label">
                                    총 결제금액
                                </div>
                                <div className="thankyou__total-price">
                                    50000원
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="sidebar">
                    <div className="sidebar__header">
                        <div className="sidebar__title">
                            요기요 앱에서 주문하면 받을 수 있는 혜택
                        </div>
                    </div>
                    <div className="sidebar__body">
                        <div className="sidebar__body-text">
                            매일 최대 5000원 할인!<br />
                            50%까지 타임 할인!<br />
                            업계 최대 포인트 적립까지!
                        </div>
                    </div>
                    <div className="thankyou__liner-wrapper">
                        <div className="thankyou__liner">
                        </div>
                    </div>
                    <div className="sidebar__bottom">
                        <div className="sidebar__bottom-text">
                            앱 다운로드 URL 문자 받기
                        </div>
                        <form className="sidebar__form">
                            <input className="sidebar__bottom-input">
                            </input>
                            <button className="sidebar__bottom-btn">
                                전송하기
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default OrderThankyou