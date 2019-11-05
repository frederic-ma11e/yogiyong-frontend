import React, { Component } from 'react'
import './HorizonMenu.scss'

export class HorizonMenu extends Component {
    constructor(){
        super()
        this.state={
            menuNum:'33',
            reviewNum:'1116',
            menuImg:'',
            menuName:'간장구이삼겹 2인',
            menuPrice:'19,000원',
        }
    }

    render() {
        const {menuNum,reviewNum}=this.state
        console.log(this.props.clickdata)
        
        return (
                <div className='menuContainer'>
                    <div className='menuTab'>
                        <ul className='menuTab__ul'>
                            <li id="menuTab" className={"menuTab__ul__li "+ (this.props.menuTabs.menuTab? "buttonColorRed" : "")} onClick={this.props.passEvent}>메뉴<span>{menuNum}</span></li>
                            <li id="reviewTab" className={"menuTab__ul__li "+ (this.props.menuTabs.reviewTab? "buttonColorRed" : "")} onClick={this.props.passEvent}>클린리뷰<span>{reviewNum}</span></li>
                            <li id="infoTab" className={"menuTab__ul__li "+ (this.props.menuTabs.infoTab? "buttonColorRed" : "")} onClick={this.props.passEvent}>정보</li>
                        </ul>
                    </div>
                    
                    {/* <PhotoMenuContainer 
                    menuImg={menuImg}
                    menuName={menuName}
                    menuPrice={menuPrice}/> */}
                </div>
            
        )
    }
}

export default HorizonMenu
