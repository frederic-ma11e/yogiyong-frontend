import React, { Component } from 'react'

  class LoginButton extends Component{
    
    handleClick=(e)=>{
        this.props.onClick(e);
    }
    render(){
    return (
            <button
            className="login-button"
            onClick={this.handleClick}>로그인</button>
    )
}
}

export default LoginButton