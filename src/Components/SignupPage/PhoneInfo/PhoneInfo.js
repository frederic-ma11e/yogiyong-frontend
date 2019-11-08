import React from 'react';
import '../InputListGroup.scss'
class PhoneInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phoneNumber: "",
            certificateNum: "",
            phoneNumberSave: ""
        }
    }

    handleCertification = (event) => {
        // const input = [event.target.name]
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.onInput(this.state)

    }

    handleClick = (event) => {
        console.log(event.target)
        if (event.target.textContent === "인증") {
            return fetch('http://10.58.2.201:8004/user/auth/send', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'phone_number': this.state.phoneNumber,
                })
            })
                .then(response => response.json())
            // .then(response => console.log("phoneNumberSave===", response))
        } else if (event.target.textContent === "확인") {
            console.log("확인")
            fetch('http://10.58.2.201:8004/user/auth/confirm', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'phone_number': this.state.phoneNumber,
                    'auth_number': this.state.certificateNum
                })
            })
                .then(response => response.json())
                .then(response =>
                // console.log("certiNum And phoneNum ===", response)
                {
                    console.log("certiNum And phoneNum ===", response)
                    this.setState({
                        phoneNumberSave: response.authorized_phone_number
                    })
                    this.props.check(this.state.phoneNumberSave)
                }
                )
        }
        console.log("certifiNum===", this.state.phoneNumberSave)
    }

    // }
    // handlleSUbmit = (event) => {
    //     if (this.state.phoneNumber && this.state.phoneNumber.length > 11) {
    //         fetch('http://10.58.2.201:8004/user/signup', {
    //             method: 'POST',
    //             header: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 'email': this.state.personalInformation.email,
    //                 'password': this.state.personalInformation.pwd,
    //                 'nickname': this.state.personalInformation.nickname
    //             })
    //         })
    //             .then(response => response.json())
    //             .then(response => console.log(response))
    //     }
    // }

    render() {
        console.log("thisState===", this.state)
        console.log(("thisState ", this.props))
        console.log(this.state.phoneNumber)
        return (
            <ul className="join-form__input-list-group">
                {this.props.data.map((info, index) => (
                    <li key={index} className="join-form__input-list">
                        <input className="join-form__input" onChange={this.handleCertification} name={info.name} placeholder={info.placeholder} type={info.type}></input>
                        <button className="join-form__button" onClick={this.handleClick} type={info.buttonType}>{info.text}</button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default PhoneInfo;