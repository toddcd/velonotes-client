import React, { Component } from 'react'


const BikeCollectionContext = React.createContext({
    bikeList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBikeList: () => {},
})
export default BikeCollectionContext

export class BikeCollectionProvider extends Component {
    state = {
        bikeList: [],
        error: null,
    };

    setBikeList = bikeList => {
        this.setState({ bikeList })
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
            bikeList: this.state.bikeList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBikeList: this.setBikeList,
        }
        return (
            <BikeCollectionContext.Provider value={value}>
                {this.props.children}
            </BikeCollectionContext.Provider>
        )
    }
}
