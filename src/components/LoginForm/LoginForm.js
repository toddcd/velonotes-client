import React, {Component} from 'react'
import {Button, Input} from '../Utils/Utils'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.props.onLoginSuccess()

    }

    render() {
        // const {error} = this.state
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert'>
                    {/*{error && <p className='red'>{error}</p>}*/}
                </div>
                <div className='user_name'>
                    <label htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <Input
                        required
                        name='user_name'
                        id='LoginForm__user_name'>
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <Input
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </Input>
                </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}
