import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

export default class MembersContent extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-4 col-lg-1">
                        <img className="w-100" style={{ borderRadius: "100%", maxWidth: "80px" }} src={this.props.url} alt="" />
                    </div>
                    <div className="col-8 col-lg-11 align-content-center">
                        <h5>Organizer</h5>
                        <div className="row">
                            <div className="col-lg-2">
                                {this.props.organizer}
                            </div>
                            <div className="col-lg-10">
                                4 Others
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}