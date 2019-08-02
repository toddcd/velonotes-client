import React, { Component } from 'react'

const BicyclesContext = React.createContext({
    userBikeList: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setBikeList: () => {},
})
export default BicyclesContext

export class BicyclesProvider extends Component {
    state = {
        userBikeList: {},
        error: null,
    };

    setBikeList = userBikeList => {
        this.setState({ userBikeList: userBikeList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            userBikeList: this.state.userBikeList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBikeList: this.setBikeList,
        }
        return (
            <BicyclesContext.Provider value={value}>
                {this.props.children}
            </BicyclesContext.Provider>
        )
    }
}
