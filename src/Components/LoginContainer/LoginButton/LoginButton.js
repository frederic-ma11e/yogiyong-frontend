import React, { Component } from 'react'
//import Axios from 'axios';
import {withRouter} from 'react-router-dom'

  class LoginButton extends Component{
   
    handleClick=(e)=>{
      this.props.onClick(e);

        // Axios.post('10.58.2.201:8004/user/signin',{
        //   params: {
        //     email:this.props.idvalue,
        //     password: this.props.pwvalue
        //   }
        // })
        
        fetch('http://10.58.2.201:8004/user/signin', {
            method:'post',
            body: JSON.stringify({
                email: this.props.idvalue,
                password: this.props.pwvalue
            })
        })
        .then(res=>{
            return res.json() //response 를 js객체로 받음
        })
        .then(res=>{ //그 response를 가지고 
          console.log(res)

            if(res.message==="SUCCESS"){
              localStorage.setItem("user_token", res.user_token)
              //localStorage.removeItem("user_token") logout 
              this.props.history.push("/")
        }}
        )
    }
    render(){
    return (
            <button
            className="login-button"
            onClick={this.handleClick}>로그인</button>
    )
}
}

export default withRouter(LoginButton)