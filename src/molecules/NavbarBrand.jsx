import React from "react";
import Heading from "../atoms/Heading";

export default class NavbarBrand extends React.Component {
    render() {
        return (
            <>
                <div className="navbar-brand">
                    <Heading name={this.props.brandName} />
                </div>
            </>
        )
    }
}