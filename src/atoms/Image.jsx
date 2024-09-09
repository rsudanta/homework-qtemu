import React from "react";

export default class Image extends React.Component {
    render() {
        return (
            <>
                <img className="w-100" style={{ maxHeight: "160px" }} src={this.props.url} alt="" />
            </>
        )
    }   
}