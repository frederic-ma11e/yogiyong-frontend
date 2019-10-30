import React, { Component } from 'react'
import Input from './Input.js'
import Login_CheckBox from '../Check-box/Login_CheckBox'
import Login_button from '../Login-botton/Login_button.js';


export class Login_form extends Component {
    constructor(){
        super();
        this.state={
            idvalue:'',
            pwvalue:'',
            idwarning: false,
            pwwarning: false,
            
        }
    }

    checkIdvalue=()=>{
        const {idvalue, pwvalue}= this.state;
        let checkId = idvalue.slice(0, idvalue.indexOf("@"));
        let checkEmail = idvalue.slice(idvalue.indexOf("@"), idvalue.indexOf("."));
        let checkCom = idvalue.slice(idvalue.indexOf("."), idvalue.length);

        if((checkId.length>=1) &&(checkEmail.length>=2)&&(checkCom.length>=3)){
            //console.log("success")
            this.setState({idwarning: false});
            
        }else{
            this.setState({idwarning:true});
            //console.log("failed")
        }
        if(idvalue.length===0){
            this.setState({idwarning:false});
        }
    }

    // 로그인 버튼을 눌렀을때 length가 0일경우
    checkPwvalue=(e)=>{
        if(this.state.pwvalue){
            this.setState({pwwarning:false});
        }else{
            this.setState({pwwarning:true});
        }
        
    }

    changeValue=(e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        
        this.setState({[e.target.name]:e.target.value},()=>{
                this.checkIdvalue();
                //this.checkPwvalue();
        })
    }

    render() {
        //console.log(this.state.warning)
        return (
            <div>
                <ul className="login-form" >
                    <li className="inputlist">
                        <Input type="text" name="idvalue" value={this.state.idvalue} id="input-id" placeholder="이메일 주소 입력(필수)" onchange={this.changeValue} />
                        {this.state.idwarning &&  <span className="warning">유효한 이메일 주소 형식이 아닙니다.</span>}
                        {/*warning값이 true일때, 이 스팬을 보여줌*/}
                    </li>
                    <li className="inputlist">
                        <Input type="password" name="pwvalue" value={this.state.pwvalue} id="input-passwd" placeholder="비밀번호 입력(필수)" onchange={this.changeValue}/>
                        {this.state.pwwarning && <span className="warning">유효한 비밀번호 형식이 아닙니다.</span>}
                    </li>
                </ul>
                <Login_CheckBox />
                <Login_button onClick= {this.checkPwvalue}/>
            </div>
        )
    }
}

export default Login_form