import React from "react";

export default class FormLoginComponents extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'danta',
            car: ['kijang', 'inova'],
            email: ""
        }
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    handleInputForm = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleInputForm(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e) => {
                            this.handleInput(e)
                        }} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }

}