import React from "react";
import Link from "../atoms/Link";

export default class NavbarItemRight extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex" role="search">
                    {
                        this.props.navItem.map((el, idx) => (
                            <Link key={idx} linkName={el} />
                        ))
                    }
                </div>
            </>
        )
    }
}