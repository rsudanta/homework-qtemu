import React from "react";

export default class Heading extends React.Component {
    render() {
        return (
            <>
                <h3 className="mb-0">{this.props.name}</h3>
            </>
        )
    }
}