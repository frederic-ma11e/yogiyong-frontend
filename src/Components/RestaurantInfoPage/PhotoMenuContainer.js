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

        let items = this.props.data.map(el => (
                            <div className='photoMenuContainer__div'>
                                <div className='menuImg'>{el.menuImg}</div>
                                <div className='menuName' >{el.menuName}</div>
                                <div className='menuPrice'>{el.menuPrice}</div>
                            </div>
        ))


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
