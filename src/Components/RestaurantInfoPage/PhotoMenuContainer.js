import React, { Component } from 'react'
import Flickity from "react-flickity-component";
import './flickity.scss'
import './PhotoMenuContainer.scss'

export class PhotoMenuContainer extends Component {
    render() {
        const flickityOptions = {
            initialIndex: 0,
            wrapAround: true,
            accessibility:true,
            prevNextButtons: true,
            pageDots: true
        }
        console.log("thisssss",this.props.data)
        let items = "";
        if(this.props.data) {
            items = this.props.data.map(el => (
                                <div className='photoMenuContainer__div'>
                                    <img className='menuImg' src={el.image} />
                                    <div className='menuName' >{el.name}</div>
                                    <div className='menuPrice'>{Math.floor(el.price)}원</div>
                                </div>
            ))
        }

         return (
            <div className='photoMenuContainer'>
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {items}
                    </Flickity>
            </div>
        )
    }
}

export default PhotoMenuContainer
