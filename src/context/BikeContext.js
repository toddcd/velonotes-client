import React, { Component } from 'react'

export const nullBike = {
    bike: {},
    positions: [],
    notes: [],
}

const BikeContext = React.createContext({
    bike: nullBike,
    reviews: [],
    error: null,
    setError: () => {},
    clearError: () => { },
    setBike: () => {},
    clearBike: () => {},
    setPositions: () => {},
    addPosition: () => {},
    setNotes: () => {},
    addNote: () => {},
})

export default BikeContext

export class BikeProvider extends Component {
    state = {
        bike: nullBike,
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBike = bike => {
        this.setState({ bike })
    }

    setPositions = positions => {
        this.setState({ positions })
    }

    setNotes = positions => {
        this.setState({ positions })
    }

    clearBike = () => {
        this.setBike(nullBike)
        this.setPositions([])
        this.setNotes([])
    }

    addPosition = position => {
        this.setPositions([
            ...this.state.positions,
            position
        ])
    }

    addNote = note => {
        this.setReviews([
            ...this.state.notes,
            note
        ])
    }

    render() {
        const value = {
            bike: this.state.bike,
            positions: this.state.positions,
            notes: this.state.notes,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBike: this.setBike,
            setPositions: this.setPositions,
            setNotes: this.setNotes,
            clearBike: this.clearBike,
            addPosition: this.addPosition,
            addNote: this.addNote,
        }
        return (
            <BikeContext.Provider value={value}>
                {this.props.children}
            </BikeContext.Provider>
        )
    }
}
