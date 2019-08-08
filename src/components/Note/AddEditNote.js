import React, {Component, Fragment} from 'react'
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
            note_id: event.target.dataset.note_id,
            note_type: event.target.type.value,
            note: event.target.note.value
        }

        console.log(note)

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
        if (this.props.location.state) {
            editNote = this.props.location.state.editNote
        }
        const formValues = {
            'handleSubmit': this.handleAddNote,
            'note_id': null,
            'title': 'Add Note',
            'note_type': '',
            'note': ''
        }
        if (editNote) {
            formValues.handleSubmit = this.handleUpdateNote
            formValues.note_id = editNote.note_id
            formValues.title = 'Edit Note'
            formValues.note_type = editNote.type
            formValues.note = editNote.note
        }
        return formValues
    }

    render() {
        const {handleSubmit, note_id, title, note_type, note} = this.setFormValues()
        return (
           <div className='add-note-container'>
                <h2>{title}</h2>
                <form className='new-note-form' data-note_id={note_id} onSubmit={handleSubmit}>
                    <label htmlFor='type'>Note Type</label>
                    <div className='note-type-items'>
                        <div className='list-item'>
                            <label className='list-item-label' htmlFor='model'>Maintenance</label>
                            <input className='note-radio' type='radio' name='type' value='maintenance' checked={(note_type === 'maintenance' ? 'checked' : null )} />
                        </div>
                        <div className='list-item'>
                            <label className='list-item-label' htmlFor='model'>Setup</label>
                            <input className='note-radio' type='radio' name='type' value='setup' checked={(note_type === 'setup' ? 'checked' : null )}/>
                        </div>
                        <div className='list-item'>
                            <label className='list-item-label' htmlFor='model'>General</label>
                            <input className='note-radio' type='radio' name='type' value='general'checked={(note_type === 'general' ? 'checked' : null )}/>
                        </div>
                    </div>

                    <label htmlFor='type'>Note</label>
                    <textarea className='new-note-textarea' name='note' rows='5' defaultValue={note}/>
                    <button className='Button' type='submit'>Save</button>
                    <button className='Button' onClick={this.handleCancel} type='reset'>Cancel</button>
                </form>
           </div>
        )
    }
}

