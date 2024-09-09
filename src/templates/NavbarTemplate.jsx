import React from "react";
import Navbar from "../organisms/Navbar";

class NavbarTemplate extends React.Component {
    constructor() {
        super()
        this.state = {
            navItemLeft: ['Create Meetup', 'Explore'],
            navItemRight: ['Login'],
            brandName: 'Qtemu'
        }
    }
    render() {
        return (<>
            <Navbar
                navItemLeft={this.state.navItemLeft}
                navItemRight={this.state.navItemRight}
                brandName={this.state.brandName}
            />
        </>);
    }
}

export default NavbarTemplate;