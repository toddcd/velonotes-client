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
    removePosition: () => {
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
            return note.note_id != noteId
        })
        const bike = {
                geometry: source_bike.geometry,
                make: source_bike.make,
                mrf_bike_id: source_bike.mrf_bike_id,
                model: source_bike.model,
                notes: notes,
                positions: source_bike.positions,
                user_bike_id: source_bike.user_bike_id,
                year: source_bike.year
        }
        this.setState({bike})
    }

    removePosition = positionId => {
        let source_bike = this.state.bike
        const positions = source_bike.positions.filter(pos => {
            return pos.position_id != positionId
        })
        const bike = {
            geometry: source_bike.geometry,
            make: source_bike.make,
            mrf_bike_id: source_bike.mrf_bike_id,
            model: source_bike.model,
            notes: source_bike.notes,
            positions: positions,
            user_bike_id: source_bike.user_bike_id,
            year: source_bike.year
        }
        this.setState({bike})
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
            removePosition: this.removePosition,
        }
        return (
            <BikeContext.Provider value={value}>
                {this.props.children}
            </BikeContext.Provider>
        )
    }
}
