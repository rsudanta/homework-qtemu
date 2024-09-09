import React from "react";

export default class TitleWithButton extends React.Component {
    render() {
        return (
            <>
                <div className="mt-4 d-flex justify-content-between" style={{ alignItems: "center" }}>
                    <h3>{this.props.title}</h3>
                    <h5>See All</h5>
                </div>
            </>
        )
    }
}