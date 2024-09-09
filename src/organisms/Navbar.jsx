import React from "react";
import NavbarItemLeft from "../molecules/NavbarItemLeft";
import NavbarItemRight from "../molecules/NavbarItemRight";
import NavbarBrand from "../molecules/NavbarBrand";
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {

    render() {
        return (<>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavbarBrand brandName={this.props.brandName} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavbarItemLeft navItem={this.props.navItemLeft} />
                        <NavbarItemRight navItem={this.props.navItemRight} />
                    </div>
                </div>
            </nav>
        </>);
    }
}

Navbar.propTypes = {
    brandName: PropTypes.string,
    navItemLeft: PropTypes.array,
    navItemRight: PropTypes.array,
}