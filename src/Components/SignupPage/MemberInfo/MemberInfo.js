import React from 'react';
import '../InputListGroup.scss'

class MemberInfo extends React.Component {
    render() {
        return (
            <ul className="join-form__input-list-group">
                {this.props.data.map((info, index) => (
                    <li key={index}>
                        <input className="join-form__input" placeholder={info.placeholder} type={info.type}></input>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MemberInfo;