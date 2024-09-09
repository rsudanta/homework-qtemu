import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

export default class Card extends React.Component {
    render() {
        return (
            <>
                <div className="card px-4 py-4" >
                    <h5 className="card-title">{this.props.date}</h5>
                    <hr />
                    <p className="card-text">{this.props.content}</p>
                    <Button buttonName={this.props.buttonName} />
                </div>
            </>
        )
    }
}