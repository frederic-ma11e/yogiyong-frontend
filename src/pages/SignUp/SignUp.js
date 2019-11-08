import React from 'react';
import './SignUp.scss';
import MemberInfo from '../../Components/SignupPage/MemberInfo/MemberInfo.js'
import PhoneInfo from '../../Components/SignupPage/PhoneInfo/PhoneInfo'
import TermsAndCondition from '../../Components/SignupPage/TermsAndCondition/TermsAndCondition'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link, withRouter } from 'react-router-dom';

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
                    buttonType: "button",
                    name: "phoneNumber"
                },
                {
                    placeholder: "인증번호 입력",
                    type: "number",
                    text: "확인",
                    buttonType: "button",
                    name: "certificateNum"
                }
            ],
            personalInformation: {
                id: "",
                pwd: "",
                repwd: "",
                nickname: ""
            },
            certify: {
                phoneNumber: "1",
                certificateNum: "1",
                phoneNumberSave: "1"
            },
            checkingPhoneNum: "1",
        };
    }

    handleSave = (data) => {
        this.setState({
            personalInformation: data
        })
    }

    handleInput = (input) => {
        this.setState({
            certify: input
        })
        console.log("is input transfered well?===", this.state.certify)
    }

    handleCertification = (number) => {
        console.log("Is handle Certi working", number)
        this.setState({
            checkingPhoneNum: number
        })
        console.log("is certified phone num?===", this.state.checkingPhoneNum)
    }



    handleCheck = () => {
        // console.log(this.state.information.pwd)
        // event.preventDefault();
        const { personalInformation } = this.state
        if ((personalInformation.pwd === personalInformation.repwd) &&
            (this.state.certify.phoneNumber === this.state.checkingPhoneNum)) {
            return fetch('http://10.58.2.201:8004/user/signup', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': this.state.personalInformation.email,
                    'password': this.state.personalInformation.pwd,
                    'nickname': this.state.personalInformation.nickname,
                    'authorized_phone_number': this.state.checkingPhoneNum,
                    'notification_accept': true

                })
            })
                .then(response => response.json())
                .then(response => console.log(response))
        }
    }
    // handleCertification = (event) => {
    //     this.setState({
    //         certify[phoneNumber: event.target.value
    //     })
    //     console.log(this.state)

    // }

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
            <div>
                <Header />
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
                                <PhoneInfo
                                    data={this.state.phoneInformation}
                                    check={this.handleCertification}
                                    onInput={this.handleInput}
                                />
                                <p className="join-form__text-box-small">    인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요. </p>
                            </div>
                            <strong className="join-form__text-box">약관동의</strong>
                            <TermsAndCondition />
                            <Link
                                to='/'>
                                <button className="join-form__submit-bttn"
                                    onClick={this.handleCheck}>
                                    회원가입 완료
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default withRouter(SignUp);

