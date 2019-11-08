import React from 'react'

class TermsAndContion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allClick: false,
            check1: false,
            check2: false,
            check3: false,
            check4: false
        }
    }
    // allCheck = () => {
    //     if (this.state.allClick === false) {
    //         this.setState({
    // allClick: true,
    // check1: true,
    // check2: true,
    // check3: true,
    // check4: true
    //         });
    //     } else {
    //         this.setState({
    //             allClick: false,
    //             check1: false,
    //             check2: false,
    //             check3: false,
    //             check4: false
    //         });
    //     }
    // };

    allCheck = () => {
        this.state.allClick ? this.setState({
            allClick: false,
            check1: false,
            check2: false,
            check3: false,
            check4: false
        }) :
            this.setState({
                allClick: true,
                check1: true,
                check2: true,
                check3: true,
                check4: true
            })
    }
    handleClick = event => {
        let check = [
            this.state.check1,
            this.state.check2,
            this.state.check3,
            this.state.check4
        ];

        for (let i = 0; i < 4; i++) {
            if (event.target.id === `checkList${i}`) {
                if (check[i] === false) {
                    this.setState({
                        [event.target.id]: true
                    });
                } else if (check[i] === true) {
                    this.setState({
                        [event.target.id]: false,
                        checkListAll: false
                    });
                }
            }
        }
    };




    // handleClick = (event) => {
    //     let which = [event.target.id]
    //     this.state.which ?
    //         this.setState({ which: false }) :
    //         this.setState({ which: true })
    // };



    render() {
        const { allClick, check1, check2, check3, checkList3 } = this.state
        return (
            <>
                <div className="join-form__terms-condition">
                    <input
                        className="join-form__terms-button" type="checkbox" id="allClick"
                        onClick={this.allCheck}
                        checked={this.state.allClick} />
                    <label className="join-form__terms-label" for="allClick">
                        <span className="join-form__terms-span"></span>
                        전체동의
                    </label>
                </div>
                <div id="whole">
                    <div className="join-form__terms-condition1">
                        <input
                            className="join-form__terms-button" type="checkbox" id="check1"
                            onClick={this.handleClick}
                            checked={this.state.check1}
                        />
                        <label className="join-form__terms-label" for="check1">
                            <span className="join-form__terms-span"></span>
                            이용약관 (필수)
                        <a className="join-form__terms-link"
                                href="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/policy"
                                target="_blank">내용보기 ></a>
                        </label>
                    </div>
                    <div className="join-form__terms-condition1">
                        <input
                            className="join-form__terms-button" type="checkbox" id="check2"
                            onClick={this.handleClick}
                            checked={this.state.check2}
                        />
                        <label className="join-form__terms-label" for="check2">
                            <span className="join-form__terms-span"></span>
                            개인정보 수집 및 이용동의 (필수)
                        <a className="join-form__terms-link"
                                href="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/collect_join/"
                                target="_blank">내용보기 ></a>
                        </label>
                    </div>
                    <div className="join-form__terms-condition1">
                        <input
                            className="join-form__terms-button" type="checkbox" id="check3"
                            onClick={this.handleClick}
                            checked={this.state.check3}
                        />
                        <label className="join-form__terms-label" for="check3">
                            <span className="join-form__terms-span"></span>
                            만 14세 이상 이용자 (필수)
                        <a className="join-form__terms-link"
                                href="https://www.yogiyo.co.kr/p/faq/#4-4/"
                                target="_blank">내용보기 ></a>
                        </label>
                    </div>
                    <div className="join-form__terms-condition1">
                        <input
                            className="join-form__terms-button" type="checkbox" id="check4"
                            onClick={this.handleClick}
                            checked={this.state.check4}
                        />
                        <label className="join-form__terms-label" for="check4">
                            <span className="join-form__terms-span"></span>
                            요기요 혜택알림 동의 (선택)
                        <a className="join-form__terms-link" href={this.props.link} target="_blank">내용보기 ></a>
                        </label>
                    </div>
                </div>
            </>




        )
    }
}

export default TermsAndContion