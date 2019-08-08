import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import BicyclesContext from "../../context/BicyclesContext";
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = BicyclesContext

  handleLoginSuccess = () => {
    const { history } = this.props
    this.context.setLoggedIn(true)
    history.push('/')
  }

  render() {
    return (
      <section className='login-page'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}
