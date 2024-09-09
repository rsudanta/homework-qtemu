import React from "react";
import Title from "../atoms/Title";
import NextUpContent from "../molecules/NextUpContent";
import PropTypes from 'prop-types';

export default class NextUp extends React.Component {

    render() {
        return (
            <>
                <Title title={this.props.title} />
                <div className="card px-4 py-4">
                    <NextUpContent subtitle={this.props.subtitle}
                        date={this.props.date}
                        content={this.props.content} />
                </div>
            </>
        )
    }
}

NextUp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
}