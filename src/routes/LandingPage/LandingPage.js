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
        const destination = (location.state || {}).from || '/collection'
        history.push(destination)
    }

    render() {
        return (
            <Section className='LandingPage'>
                <h2>Velonotes</h2>
                <Landing
                    //onLoginSuccess={this.handleLoginSuccess}
                />
            </Section>
        )
    }
}