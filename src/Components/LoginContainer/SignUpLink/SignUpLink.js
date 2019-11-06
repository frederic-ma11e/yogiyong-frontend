import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SignUpLink.scss'

export class SignUpLink extends Component {
    render() {
        return (
            <div className="link-signup">
                <Link to='/login/signUp' className='link'>요기요가 처음이신가요?<span>이메일 회원가입</span></Link>
            </div>
            
        )
    }
}

export default SignUpLink
