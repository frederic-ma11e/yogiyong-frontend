import React, { Component } from 'react'
export class Login_CheckBox extends Component {
    constructor(){
        super()
        this.state={
            hideValue: false
        }
    }

    hideSpan=()=>{
        if(this.state.hideValue===false){
            this.setState({hideValue:true});
        }else{
            this.setState({hideValue:false});
        }
    }



    render() {
        return (
            <div className="login__checkbox">
                <label className="login__autologin" onClick={this.hideSpan} >
                    {/*</label><input type="checkbox"></input>*/}
                    <span />
                    {this.state.hideValue && <span className="hideImg" />}
                    자동 로그인
                </label>

                <div className="login__checkbox--grey">
                    <span>아이디 찾기</span>
                    <span>|</span>
                    <span>비밀번호 찾기</span>
                </div>
          </div>
        )
    }
}

export default Login_CheckBox
