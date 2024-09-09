import React from "react";
import Date from "../atoms/Date";
import SubTitle from "../atoms/SubTitle";

export default class NextUpContent extends React.Component {
    render() {
        return (
            <>
                <SubTitle subtitle={this.props.subtitle} />
                <Date date={this.props.date} />
                <p className="mt-3">{this.props.content}</p>
            </>
        )
    }
}