import React from "react";

export default class Date extends React.Component {
    render() {
        return (
            <>
                <small style={{ color: 'grey' }}>{this.props.date}</small>
            </>
        )
    }
}