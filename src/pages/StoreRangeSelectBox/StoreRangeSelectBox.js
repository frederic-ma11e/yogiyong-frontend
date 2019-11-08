import React from 'react'
import './StoreRangeSelectBox.scss'

class StoreRangeSelectBox extends React.Component {
    render() {
        return (
            <div className="store-list__mini-header__right">
                <div>
                    <select className="store-list__mini-header__right__select-box">
                        <option>
                            기본 정렬순
                        </option>
                        <option>
                            별점 순
                        </option>
                        <option>
                            리뷰 많은순

                        </option>
                        <option>
                            최소 주문 구액 순
                        </option>
                    </select>

                </div>
            </div>
        )
    }
}
export default StoreRangeSelectBox