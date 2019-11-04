import React, { Component } from 'react'
import Input from './Input.js'
import LoginCheckBox from '../CheckBox/LoginCheckBox';
import LoginButton from '../LoginButton/LoginButton.js';


export class LoginForm extends Component {
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
        const {idvalue,pwvalue}= this.state;
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
        if(pwvalue.length>=5){
            this.setState({pwwarning:false});
        }
    }

    // 로그인 버튼을 눌렀을때 length가 0일경우
    checkPwvalue=(e)=>{
        const {pwvalue,idvalue} = this.state;
        if(pwvalue.length===0){
            this.setState({pwwarning:true});
        }else if(pwvalue.length>=5){
            this.setState({pwwarning:false});
        }else{
            this.setState({pwwarning:true});
        }

        if(idvalue.length===0){
            this.setState({idwarning:true});
        }
        
        
    }

    changeValue=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
                this.checkIdvalue();
        })
    }

    render() {
        const {idvalue,pwvalue,idwarning,pwwarning} =this.state;
        //console.log(this.state.warning)
        return (
            <div>
                <ul className="login-form" >
                    <li className="inputlist">
                        <Input type="text" name="idvalue" value={idvalue} id="input-id" placeholder="이메일 주소 입력(필수)" onchange={this.changeValue} />
                        {idwarning &&  <span className="warning">유효한 이메일 주소 형식이 아닙니다.</span>}
                        {/*warning값이 true일때, 이 스팬을 보여줌*/}
                    </li>
                    <li className="inputlist">
                        <Input type="password" name="pwvalue" value={pwvalue} id="input-passwd" placeholder="비밀번호 입력(필수)" onchange={this.changeValue}/>
                        {pwwarning && <span className="warning">유효한 비밀번호 형식이 아닙니다.</span>}
                    </li>
                </ul>
                <LoginCheckBox />
                <LoginButton 
                idvalue={idvalue}
                pwvalue={pwvalue}
                onClick= {this.checkPwvalue}/>
             
            </div>
        )
    }
}

export default LoginForm