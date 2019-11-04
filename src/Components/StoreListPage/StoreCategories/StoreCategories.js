import React, { Fragment } from 'react'
import Magnifier from '../../../Images/magnifier.png'
import './StoreCategories.scss'
class StoreCategories extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    {/* <img className = "magnifier" src={Magnifier}>
                    </img> */}
                    <label id="1">
                        <img className = "magnifier" src={Magnifier} id="1">
                        </img>
                    </label>
                    
                </div>
                <div>
                    <label id="1">
                        <div id="1">
                            전체보기
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            1인분 주문
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            프랜차이즈
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            치킨
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                        피자/양식
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            중국집
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            한식
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            일식/돈까스
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            족발/보쌈
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            야식
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            분식
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            카페/디저트
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            편의점
                        </div>
                    </label>
                </div>
            </Fragment>
        )
    }
}

export default StoreCategories