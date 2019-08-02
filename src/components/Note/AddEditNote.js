import React, {Component} from 'react'
import BikeContext from "../../context/BikeContext";
import BicycleApiService from "../../services/bicycle-api-service";
import './Note.css'

export default class AddEditNote extends Component {

    static contextType = BikeContext

    handleAddNote = (event) => {
        event.preventDefault()
        const {bikeId} = this.props.match.params
        const note = {
            user_bike_id: bikeId,
            note_type: event.target.type.value,
            note: event.target.note.value
        }

        BicycleApiService.postNote(bikeId, note)
            .then(this.context.setNotes).then(() =>
            this.props.history.push(`/gallery/${ bikeId }`)
        )
            .catch(this.context.setError)
    }

    handleUpdateNote = (event) => {
        event.preventDefault()
        const {bikeId} = this.props.match.params
        const note = {
            note_type: event.target.type.value,
            note: event.target.note.value
        }

        BicycleApiService.patchNote(bikeId, note)
            .then(this.context.setNotes).then(() =>
            this.props.history.push(`/gallery/${ bikeId }`)
        )
            .catch(this.context.setError)
    }

    handleCancel = () => {
        const {bikeId} = this.props.match.params
        this.props.history.push(`/gallery/${ bikeId }`)
    }

    render() {
        return(
            <div className='add-note'>
                <form onSubmit={ this.handleAddNote }>
                    <label htmlFor='type'>Type</label>
                    <select name='type' type='select'>
                        <option value="maintenance">Maintenance</option>
                        <option value="setup">Setup</option>
                        <option value="general">General</option>
                    </select>
                    <label htmlFor='type'>Note</label>
                    <textarea name='note' rows='5' />
                    <button type='submit'>Save</button>
                    <button onClick={this.handleCancel} type='reset'>Cancel</button>
                </form>
            </div>
        )
    }
}

