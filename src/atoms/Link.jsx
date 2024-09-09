import React from "react";

export default class Link extends React.Component {
    render() {
        return (
            <>
                <a className="nav-link">{this.props.linkName}</a>
            </>
        )
    }
}