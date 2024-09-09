import PropTypes from 'prop-types';
import React from "react";
import Title from "../atoms/Title";

export default class About extends React.Component {

    render() {
        return (
            <>
                <Title title={this.props.title} />
                <p>{this.props.content}</p>
            </>
        )
    }
}

About.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
}