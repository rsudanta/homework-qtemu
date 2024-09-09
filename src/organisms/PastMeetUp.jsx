import PropTypes from 'prop-types';
import React from "react";
import Title from "../atoms/Title";
import TitleWithButton from '../molecules/TitleWithButton';
import Card from '../molecules/Card';

export default class PastMeetUp extends React.Component {

    render() {
        return (
            <>
                <TitleWithButton title={this.props.title} />
                <div className="row">
                    {this.props.cardContent.map(el => (
                        <div className="col-md-4 mt-2 mt-md-0">
                            <Card date={el.date}
                                content={el.content}
                                buttonName={el.buttonName} />
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

PastMeetUp.propTypes = {
    title: PropTypes.string,
    cardContent: PropTypes.array,
}