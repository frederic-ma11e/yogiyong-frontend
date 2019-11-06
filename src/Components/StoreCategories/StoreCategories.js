import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import './StoreCategories.scss'
class StoreCategories extends React.Component {

    render() {
        return (
            <Fragment>
                {/* <div>
                    <label id="0">
                        <div id="0">
                            전체보기
                        </div>
                    </label>
                </div> */}
                <div>
                    <Link
                        to={`/storelist/${this.props.info.id}`}
                        id={this.props.info.id}
                        onClick={() => this.props.click(this.props.info.id)}
                    >
                        <div id={this.props.info.id}>
                            {this.props.info.name}
                        </div>
                    </Link>
                </div>
                {/* <div>
                    <label id="2">
                        <div id="2">
                            프랜차이즈
                        </div>
                    </label>
                </div>
                <div>
                    <label id="3">
                        <div id="3">
                            치킨
                        </div>
                    </label>
                </div>
                <div>
                    <label id="4">
                        <div id="4">
                            피자/양식
                        </div>
                    </label>
                </div>
                <div>
                    <label id="5">
                        <div id="5">
                            중국집
                        </div>
                    </label>
                </div>
                <div>
                    <label id="6">
                        <div id="6">
                            한식
                        </div>
                    </label>
                </div>
                <div>
                    <label id="7">
                        <div id="7">
                            일식/돈까스
                        </div>
                    </label>
                </div>
                <div>
                    <label id="8">
                        <div id="8">
                            족발/보쌈
                        </div>
                    </label>
                </div>
                <div>
                    <label id="9">
                        <div id="9">
                            야식
                        </div>
                    </label>
                </div>
                <div>
                    <label id="10">
                        <div id="10">
                            분식
                        </div>
                    </label>
                </div>
                <div>
                    <label id="11">
                        <div id="11">
                            카페/디저트
                        </div>
                    </label>
                </div>
                <div>
                    <label id="12">
                        <div id="12">
                            편의점
                        </div>
                    </label>
                </div> */}
            </Fragment >
        )
    }
}

export default StoreCategories