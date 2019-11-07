import React, { Component } from 'react'
import './HorizonMenu.scss'

export class HorizonMenu extends Component {
    render() {
        //console.log(this.props.clickdata)
        
        return (
                <div className='menuContainer'>
                    <div className='menuTab'>
                        <ul className='menuTab__ul'>
                            <li className={"menuTab__ul__li "+ (this.props.menuTabs.menuTab? "buttonColorRed" : "")} onClick={()=>{this.props.passEvent("menuTab")}}> 메뉴 </li>
                            <li className={"menuTab__ul__li "+ (this.props.menuTabs.reviewTab? "buttonColorRed" : "")} onClick={()=>{this.props.passEvent("reviewTab")}}>클린리뷰<span>{this.props.reviewNum}</span></li>
                            <li className={"menuTab__ul__li "+ (this.props.menuTabs.infoTab? "buttonColorRed" : "")} onClick={()=>{this.props.passEvent("infoTab")}}>정보</li>
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
