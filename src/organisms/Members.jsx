
import PropTypes from 'prop-types';
import React from "react";
import TitleWithButton from "../molecules/TitleWithButton";
import MembersContent from '../molecules/MembersContent';

export default class Members extends React.Component {
    render() {
        return (
            <>
                <TitleWithButton title={this.props.title} />
                <div className="card px-4 py-4">
                    <MembersContent url={this.props.url}
                        organizer={this.props.organizer} />
                </div>
            </>
        )
    }
}

Members.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    organizer: PropTypes.string,
}