import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <>
                <h3 className="mt-4">{this.props.title}</h3>
            </>
        )
    }
}