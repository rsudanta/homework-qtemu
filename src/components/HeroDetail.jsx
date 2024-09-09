import React from "react";
import PropTypes from 'prop-types'

export default class HeroDetail extends React.Component {
    handleLiftingData = () => {
        let { sendData } = this.props
        sendData('check')
    }

    render() {
        return (
            <>
                <h1>{this.props.heroName}</h1>
                <button onClick={this.handleLiftingData}>Send data</button>
            </>
        )
    }
}

HeroDetail.propTypes = {
    namePokemon: PropTypes.string
}