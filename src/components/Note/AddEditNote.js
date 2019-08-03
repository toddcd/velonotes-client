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
            .then(() =>
            this.props.history.push(`/gallery/${bikeId}`)
        )
            .catch(this.context.setError)
    }

    handleUpdateNote = (event) => {
        event.preventDefault()
        const {bikeId} = this.props.match.params
        const note = {
            note_id:event.target.dataset.note_id,
            note_type: event.target.type.value,
            note: event.target.note.value
        }

        BicycleApiService.patchNote(bikeId, note)
            .then(() =>
            this.props.history.push(`/gallery/${bikeId}`)
        )
            .catch(this.context.setError)
    }

    handleCancel = () => {
        const {bikeId} = this.props.match.params
        this.props.history.push(`/gallery/${bikeId}`)
    }

    // Set form values based on Add or Edit mode. If a existing note is passed
    // into the addEditNote component through location.state, then Edit mode
    setFormValues = () => {
        let editNote = null
        if(this.props.location.state){
            editNote = this.props.location.state.editNote
        }
        const formValues = {
            'handleSubmit': this.handleAddNote,
            'note_id': null,
            'title': 'Add Note',
            'note_type': '',
            'note':''
        }
        if (editNote) {
            formValues.handleSubmit = this.handleUpdateNote
            formValues.note_id = editNote.note_id
            formValues.title = 'Edit Note'
            formValues.note_type = editNote.note_type
            formValues.note = editNote.note
        }
        return formValues
    }

    render() {
        const {handleSubmit, note_id, title, note_type, note} = this.setFormValues()
        return (
            <div className='add-note'>
                <h2>{title}</h2>
                <form data-note_id={note_id} onSubmit={handleSubmit}>
                    <label htmlFor='type'>Type</label>
                    <select className='Select' name='type' type='select' defaultValue={note_type}>
                        <option value="maintenance">Maintenance</option>
                        <option value="setup">Setup</option>
                        <option value="general">General</option>
                    </select>
                    <label htmlFor='type'>Note</label>
                    <textarea className='Textarea' name='note' rows='5' defaultValue={note}/>
                    <button className='Button' type='submit'>Save</button>
                    <button className='Button' onClick={this.handleCancel} type='reset'>Cancel</button>
                </form>
            </div>
        )
    }
}

