import React, { Component } from 'react'

const BicyclesContext = React.createContext({
    userBikeList: {},
    makeDataList: {},
    sizeDataList: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setBikeList: () => {},
    setMakeDataList: () => {},
    setSizeDataList: () => {},
})
export default BicyclesContext

export class BicyclesProvider extends Component {
    state = {
        userBikeList: {},
        makeDataList:{},
        sizeDataList:{},
        error: null,
    };

    setBikeList = userBikeList => {
        this.setState({ userBikeList: userBikeList })
    }

    setMakeDataList = makeData => {
        this.setState({ makeDataList: makeData })
    }

    setSizeDataList = sizeData => {
        this.setState({ sizeDataList: sizeData })
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
            makeDataList: this.state.makeDataList,
            sizeDataList: this.state.sizeDataList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBikeList: this.setBikeList,
            setMakeDataList: this.setMakeDataList,
            setSizeDataList: this.setSizeDataList,
        }
        return (
            <BicyclesContext.Provider value={value}>
                {this.props.children}
            </BicyclesContext.Provider>
        )
    }
}
