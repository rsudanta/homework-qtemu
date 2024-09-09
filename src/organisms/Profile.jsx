import React from "react";
import HeaderImage from "../molecules/HeaderImage";
import HeaderProfile from "../molecules/HeaderProfile";
import PropTypes from 'prop-types';

export default class Profile extends React.Component {

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <HeaderImage url={this.props.url} />
                    </div>
                    <div className="col-12 col-lg-10">
                        <HeaderProfile
                            title={this.props.title}
                            location={this.props.location}
                            members={this.props.members}
                            organizers={this.props.organizers} />
                    </div>
                </div>
            </>
        )
    }
}

Profile.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    members: PropTypes.string,
    organizers: PropTypes.string,
}