import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

export default class HeaderProfile extends React.Component {
    render() {
        return (
            <>
                <h5 className="mt-2 mt-md-0">{this.props.title}</h5>
                <div className="row">
                    <div className="col-lg-2"><b>Location</b></div>
                    <div className="col-lg-10">{this.props.location}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2"><b>Members</b></div>
                    <div className="col-lg-10">{this.props.members}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2"><b>Organizers</b></div>
                    <div className="col-lg-10">{this.props.organizers}</div>
                </div>
                <div className="mt-4">
                    <Button buttonName="Join Us" />
                </div>
            </>
        )
    }
}