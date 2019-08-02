import React, {Component} from 'react'

export const nullBike = {
    bike: {}
}

const BikeContext = React.createContext({
    bike: nullBike,
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setBike: () => {
    },
    clearBike: () => {
    },
    removeNote: () => {
    },
})

export default BikeContext

export class BikeProvider extends Component {
    state = {
        bike: nullBike,
        error: null,
    };

    setBike = bike => {
        this.setState({bike})
    }

    clearBike = () => {
        this.setBike(nullBike)
    }

    removeNote = noteId => {
        let source_bike = this.state.bike
        const notes = source_bike.notes.filter(note => {
            return  note.note_id != noteId
        })
        const bike = { notes: notes }
        this.setState({ bike })
    }


    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const value = {
            bike: this.state.bike,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBike: this.setBike,
            clearBike: this.clearBike,
            removeNote: this.removeNote,
        }
        return (
            <BikeContext.Provider value={value}>
                {this.props.children}
            </BikeContext.Provider>
        )
    }
}
