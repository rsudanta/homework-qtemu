import React from "react";

export default function MainComponent() {
    return (
        <>
            <div className="card px-4 py-4">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <img className="w-100" style={{ maxHeight: "160px" }} src="https://files.klob.id/public/mig01/l3aukxgu/BAedfmOT_400x400.jpg" alt="" />
                    </div>
                    <div className="col-12 col-lg-10">
                        <h5 className="mt-2 mt-md-0">Hacktiv8 Meet Up</h5>
                        <div className="row">
                            <div className="col-lg-2"><b>Location</b></div>
                            <div className="col-lg-10">Jakarta, Indonesia</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"><b>Members</b></div>
                            <div className="col-lg-10">1,078</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"><b>Organizers</b></div>
                            <div className="col-lg-10">Adhy Wiranata</div>
                        </div>
                        <button className="btn btn-primary mt-3">Join Us</button>
                    </div>
                </div>
            </div>

            <h3 className="mt-4">Next Meetup</h3>

            <div className="card px-4 py-4">
                <h5>Awesome meetup and event</h5>
                <small style={{ color: 'grey' }}>06 September 2024</small>
                <p className="mt-3">Hello, JavaScript & Node.js Ninjas!<br />
                    Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
                    The meetup format will contain some short stories and technical talks.<br />
                    If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                    <br /><br />
                    Remember to bring a photo ID to get through building security.
                    <br /><br />
                    .......
                    <br /><br />
                    See you there!
                    <br /><br />
                    Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
            </div>

            <h3 className="mt-4">About Meetup</h3>
            <p>Come and meet other developers interested in the JavaScript and it's library in the greater jakarta area.
                <br /><br />
                Twitter: @JakartaJS and we use hastag #jakartajs
            </p>


            <div className="mt-4 d-flex justify-content-between" style={{ alignItems: "center" }}>
                <h3>Members</h3>
                <h5>See All</h5>
            </div>
            <div className="card px-4 py-4">
                <div className="row">
                    <div className="col-4 col-lg-1">
                        <img className="w-100" style={{ borderRadius: "100%", maxWidth: "80px" }} src="https://files.klob.id/public/mig01/l3aukxgu/BAedfmOT_400x400.jpg" alt="" />
                    </div>
                    <div className="col-8 col-lg-11 align-content-center">
                        <h5>Organizer</h5>
                        <div className="row">
                            <div className="col-lg-2">
                                Adhy Wiranata
                            </div>
                            <div className="col-lg-10">
                                4 Others
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-4 d-flex justify-content-between" style={{ alignItems: "center" }}>
                <h3>Past Meetups</h3>
                <h5>See All</h5>
            </div>

            <div className="row">
                <div className="col-md-4 mt-2 mt-md-0">
                    <div className="card px-4 py-4" >
                        <h5 className="card-title">27 November 2024</h5>
                        <hr />
                        <p className="card-text">#39 JakartaJS April Meetup with kumparan</p>
                        <p><span className="fw-bold">
                            139</span> Went</p>
                        <button className="btn btn-primary">View</button>
                    </div>
                </div>
                <div className="col-md-4 mt-2 mt-md-0">
                    <div className="card px-4 py-4" >
                        <h5 className="card-title">27 November 2024</h5>
                        <hr />
                        <p className="card-text">#39 JakartaJS April Meetup with kumparan</p>
                        <p><span className="fw-bold">
                            139</span> Went</p>
                        <button className="btn btn-primary">View</button>
                    </div>
                </div>
                <div className="col-md-4 mt-2 mt-md-0">
                    <div className="card px-4 py-4" >
                        <h5 className="card-title">27 November 2024</h5>
                        <hr />
                        <p className="card-text">#39 JakartaJS April Meetup with kumparan</p>
                        <p><span className="fw-bold">
                            139</span> Went</p>
                        <button className="btn btn-primary">View</button>
                    </div>
                </div>
            </div>
        </>
    )
}