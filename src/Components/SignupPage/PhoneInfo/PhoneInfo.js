import React from 'react';
import '../InputListGroup.scss'
class PhoneInfo extends React.Component {
    
    render() {
        return (
            <ul className="join-form__input-list-group">
                {this.props.data.map((info, index) => (
                    <li key={index} className = "join-form__input-list">
                        <input className="join-form__input" placeholder={info.placeholder} type={info.type}></input>
                        <button className="join-form__button"type = {info.buttonType}>{info.text}</button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default PhoneInfo;