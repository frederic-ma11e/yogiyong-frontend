import React, { Component } from 'react'

export class Input extends Component {
    handleChange = (e) => {
        this.props.onchange(e)
    }


    render() {
        const{type,name, value, id, placeholder} = this.props;
        const{handleChange}=this;
        return (
            <input
            type={type} 
            value= {value} 
            name= {name}
            id={id} 
            placeholder={placeholder} 
            onChange={handleChange}/>

        )
    }
}

export default Input
