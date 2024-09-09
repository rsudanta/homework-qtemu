import React from "react";
import Image from "../atoms/Image";

export default class HeaderImage extends React.Component {
    render() {
        return (
            <>
                <Image url={this.props.url} />
            </>
        )
    }
}