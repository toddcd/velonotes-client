import React, { Component } from 'react'
import Landing from '../../components/Landing/Landing'
import { Section } from '../../components/Utils/Utils'

export default class LandingPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/gallery'
        history.push(destination)
    }

    render() {
        return (
            <section className='LandingPage'>
                <Landing
                    //onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}