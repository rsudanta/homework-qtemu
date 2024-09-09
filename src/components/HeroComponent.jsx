import React from "react";
import HeroDetail from "./HeroDetail";

export default class HeroComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            heroName: ''
        }
    }

    handleClick = () => {
        console.log(this.state.heroName)
    }

    handleDataFromChildren = (data) => {
        console.log("data from children", data)
    }

    render() {
        return (
            <>
                <input type="text" onChange={e => this.setState({
                    heroName: e.target.value
                })} />
                <button onClick={this.handleClick}>
                    Submit
                </button>
                <HeroDetail heroName={this.state.heroName} sendData={this.handleDataFromChildren} />
            </>
        )
    }
} 