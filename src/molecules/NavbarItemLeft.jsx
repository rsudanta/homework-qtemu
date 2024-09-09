import React from "react";
import Link from "../atoms/Link";

export default class NavbarItemLeft extends React.Component {
    render() {
        return (
            <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        this.props.navItem.map((el, idx) => (
                            <li>
                                <Link key={idx} linkName={el} />
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}