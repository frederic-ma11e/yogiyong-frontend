import React from 'react';
import './SignUp.scss';
import MemberInfo from '../../Component/SignupPage/MemberInfo/MemberInfo.js'
import PhoneInfo from '../../Component/SignupPage/PhoneInfo/PhoneInfo'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalInformation: [
                {
                    placeholder: "(필수) 이메일 주소 입력",
                    type: "text"
                },
                {
                    placeholder: "(필수) 비밀번호 입력",
                    type: "password"
                },
                {
                    placeholder: "(필수) 비밀번호 재확인",
                    type: "password"
                },
                {
                    placeholder: "(선택) 닉네임 입력",
                    type: "text"
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
            ]
        };
    }
    render() {
        return (
            <div className="join-form">
                <div className = "join-form__member-info">
                    <strong className="join-form__text-box">회원정보 입력</strong>
                    <MemberInfo data={this.state.personalInformation} />
                </div>
                <div className = "join-form__phone-verification">
                    <strong className="join-form__text-box">회원정보 입력</strong>
                    <PhoneInfo data={this.state.phoneInformation} />
                    <p className="join-form__text-box-small"> 인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요. </p>
                </div>
                <div>
                    <input className = "join-form__terms-button" type = "checkbox"  id= "1" />
                    <label for = "1">
                        <span className = "join-form__terms-span"></span>
                        전체동의
                    </label>
                </div>
            </div>
        )
    }
}
export default SignUp;

