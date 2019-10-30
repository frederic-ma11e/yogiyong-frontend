import React from 'react'

class TermsAndContion extends React.Component {
    render() {
        return (
            <div className="join-form__terms-condition1">
            <input className="join-form__terms-button" type="checkbox" id="1" />
            <label className="join-form__terms-label" for="1">
                <span className="join-form__terms-span"></span>
                {this.props.text}
                <a href = "{this.props.link}" target = "_blank">내용보기 ></a> 
            </label>
        </div>
        )
    }
}

export default TermsAndContion