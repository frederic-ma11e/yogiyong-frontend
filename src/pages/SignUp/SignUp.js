import React from 'react';
import './SignUp.scss';
import MemberInfo from '../../Components/SignupPage/MemberInfo/MemberInfo.js'
import PhoneInfo from '../../Components/SignupPage/PhoneInfo/PhoneInfo'
import TermsAndCondition from '../../Components/SignupPage/TermsAndCondition/TermsAndCondition'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memberInformation: [
                {
                    placeholder: "(필수) 이메일 주소 입력",
                    type: "text",
                    name: "email",

                },
                {
                    placeholder: "(필수) 비밀번호 입력",
                    type: "password",
                    name: "pwd",
                },
                {
                    placeholder: "(필수) 비밀번호 재확인",
                    type: "password",
                    name: "repwd",
                },
                {
                    placeholder: "(선택) 닉네임 입력",
                    type: "text",
                    name: "nickname",
                }
            ],
            phoneInformation: [
                {
                    placeholder: "(필수) 휴대폰 전화번호 입력 (-제외)",
                    type: "number",
                    text: "인증",
                    buttonType: "button"
                },
                {
                    placeholder: "인증번호 입력",
                    type: "number",
                    text: "확인",
                    buttonType: "button"
                }
            ],
            personalInformation: {
                id: "",
                pwd: "",
                repwd: "",
                nickname: ""
            }
        };
    }

    handleSave = (data) => {
        this.setState({
            personalInformation: data
        })
    }

    handleCheck = (event) => {
        // console.log(this.state.information.pwd)
        event.preventDefault();
        const { personalInformation } = this.state
        if (personalInformation.pwd === personalInformation.repwd) {
            return fetch('http://10.58.2.201:8004/user/signup', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': this.state.personalInformation.email,
                'password': this.state.personalInformation.pwd,
                'nickname': this.state.personalInformation.nickname
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
        }
    }

    // handleSubmit = () => {
    //     fetch('http://10.58.2.201:8004/user/signup', {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             'email': this.state.personalInformation[0].email,
    //             'password': this.state.personalInformation[0].pwd,
    //             'nickname': this.state.personalInformation[0].nickname
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    // }


    render() {
        console.log('email=====', this.state.personalInformation.email)
        console.log('pwd=====', this.state.personalInformation.pwd)
        console.log('repwd=====', this.state.personalInformation.repwd)
        console.log('nickname=====', this.state.personalInformation.nickname)
        console.log('render=====', this.state.personalInformation)
        return (
            <div className="join-form-container">
                <form >
                    <div className="join-form">
                        <div className="join-form__member-info">
                            <strong className="join-form__text-box">회원정보 입력</strong>
                            <MemberInfo
                                data={this.state.memberInformation}
                                onSave={this.handleSave} />
                        </div>
                        <div className="join-form__phone-verification">
                            <strong className="join-form__text-box">휴대폰 인증</strong>
                            <PhoneInfo data={this.state.phoneInformation} />
                            <p className="join-form__text-box-small">    인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요. </p>
                        </div>
                        <strong className="join-form__text-box">약관동의</strong>
                        <div className="join-form__terms-condition">
                            <input className="join-form__terms-button" type="checkbox" id="1" />
                            <label className="join-form__terms-label" for="1">
                                <span className="join-form__terms-span"></span>
                                전체동의
                    </label>
                        </div>
                        <TermsAndCondition text="이용약관 (필수)" link="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/policy" />
                        <TermsAndCondition text="개인정보 수집 및 이용동의 (필수)" link="https://www.yogiyo.co.kr/mobile/?gclid=CjwKCAjwo9rtBRAdEiwA_WXcFvk8DXxa71_aj5DrBmVi-DtidZLkKN-uSsFatNl9GwDWeVVNrPy7SxoCf-EQAvD_BwE#/collect_join/" />
                        <TermsAndCondition text="만 14세 이상 이용자 (필수)" link="https://www.yogiyo.co.kr/p/faq/#4-4/" />
                        <div className="join-form__terms-condition1">
                            <input className="join-form__terms-button" type="checkbox" id="1" />
                            <label className="join-form__terms-label" for="1">
                                <span className="join-form__terms-span"></span>
                                요기요 혜택알림 동의 (선택)
                    </label>
                        </div>
                        <button className="join-form__submit-bttn" onClick={this.handleCheck}>회원가입 완료</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp;

