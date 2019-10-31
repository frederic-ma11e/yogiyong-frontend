import React, { Component } from 'react'

export class LoginAnother extends Component {
    render() {
        return (
            <div className="another_box">
                <button className="login-button-another"><span className='naverLogo'/>네이버로 로그인</button>
                <button className="login-button-another"><span className='cacaoLogo'/>카카오로 로그인</button>
            </div>
        )
    }
}

export default LoginAnother
