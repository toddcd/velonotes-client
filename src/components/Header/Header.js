import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <Fragment>
                <div className='Header__logged-in'>
                    <Link
                        onClick={this.handleLogoutClick}
                        to='/'>
                        Logout
                    </Link>
                </div>
                <div className='Header__logged-in'>
                    <Link
                        to='/gallery'>
                        Gallery
                    </Link>
                </div>
            </Fragment>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/login'>
                    Log in
                </Link>
                <Link
                    to='/register'>
                    Register
                </Link>
            </div>
        )
    }

    render() {
        return <>
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        Velonotes
                    </Link>
                </h1>
                {this.renderLoginLink()}
                {this.renderLogoutLink()}
            </nav>
        </>
    }
}
