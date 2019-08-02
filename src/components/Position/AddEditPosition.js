import React, {Component} from 'react'
import BikeContext from "../../context/BikeContext";
import BicycleApiService from "../../services/bicycle-api-service";
import './Position.css'
import {Section} from "../Utils/Utils";

export default class AddEditPosition extends Component {

    static contextType = BikeContext

    handleAddPosition = (event) => {
        event.preventDefault()
        const {bikeId} = this.props.match.params
        const position = {
            user_bike_id :bikeId,
            name: event.target.name.value,
            description: event.target.description.value,
            active: event.target.active.value,
            stem: event.target.stem.value,
            stem_angle: event.target.stem_angle.value,
            handlebar: event.target.handlebar.value,
            handlebar_bend: event.target.handlebar_bend.value,
            crank: event.target.crank.value,
            crank_q: event.target.crank_q.value,
            seat: event.target.seat.value,
            seat_height: event.target.seat_height.value,
            handlebar_reach: event.target.handlebar_reach.value,
            handlebar_drop: event.target.handlebar_drop.value,
            setback: event.target.setback.value,
        }

        BicycleApiService.postPosition(position)
            .then(this.context.setPosition).then(() =>
            this.props.history.push(`/gallery/${bikeId}`)
        )
            .catch(this.context.setError)
    }

    handleUpdatePosition = (event) => {
        event.preventDefault()

        const {bikeId} = this.props.match.params
        const position = {
            note_id: event.target.dataset.note_id,
            note_type: event.target.type.value,
            note: event.target.note.value
        }

        BicycleApiService.patchNote(bikeId, position)
            .then(this.context.setPosition).then(() =>
            this.props.history.push(`/gallery/${bikeId}`)
        )
            .catch(this.context.setError)
    }

    handleCancel = () => {
        const {bikeId} = this.props.match.params
        this.props.history.push(`/gallery/${bikeId}`)
    }

    // Set form values based on Add or Edit mode. If a existing position is passed
    // into the addEditNote component through location.state, then Edit mode
    setFormValues = () => {
        let editPosition = null
        if (this.props.location.state) {
            console.log(editPosition)
            editPosition = this.props.location.state.editPosition
        }
        const formValues = {
            'handleSubmit': this.handleAddPosition,
            'position_id': null,
            'page_title': 'Add Position',
            'name': null,
            'description': null,
            'active': false,
            'stem': null,
            'stem_angle': null,
            'handlebar': null,
            'handlebar_bend': null,
            'crank': null,
            'crank_q': null,
            'seat': '',
            'seat_height': null,
            'handlebar_reach': null,
            'handlebar_drop': null,
            'setback': null,
        }
        if (editPosition) {
            formValues.handleSubmit = this.handleUpdatePosition
            formValues.position_id = editPosition.position_id
            formValues.page_title = 'Edit Position'
            formValues.name = editPosition.name
            formValues.description = editPosition.description
            formValues.active = editPosition.active
            //components
            formValues.stem = editPosition.stem
            formValues.stem_angle = editPosition.stem_angle
            formValues.handlebar = editPosition.handlebar
            formValues.handlebar_bend = editPosition.handlebar_bend
            formValues.crank = editPosition.crank
            formValues.crank_q = editPosition.crank_q
            formValues.seat = editPosition.seat
            //setup
            formValues.seat_height = editPosition.seat_height
            formValues.handlebar_reach = editPosition.handlebar_reach
            formValues.handlebar_drop = editPosition.handlebar_drop
            formValues.setback = editPosition.setback
        }
        return formValues
    }

    render() {
        const {
            handleSubmit, position_id, page_title, name,
            description, active, stem, stem_angle, handlebar,
            handlebar_bend, crank, crank_q, seat, seat_height,
            handlebar_reach, handlebar_drop, setback
        } = this.setFormValues()
        return (
            <div className='add-note'>
                <h2>{page_title}</h2>
                <form data-note_id={position_id} onSubmit={handleSubmit}>
                    <Section className='position-detail-section'>
                        <label htmlFor='name'>Name</label>
                        <input className='Input' type='text' name='name' defaultValue={name}/>
                        <label htmlFor='description'>Description</label>
                        <input className='Input' type='text' name='description' defaultValue={description}/>
                        <label htmlFor='active'>Active</label>
                        <input className='Input' type='checkbox' name='active' defaultValue={active}/>
                    </Section>
                    <div className='position-component-setup'>
                        <Section className='position-component-section'>
                            <h3>Components</h3>
                            <label htmlFor='stem'>Stem Length</label>
                            <input className='Input' type='number' name='stem' defaultValue={stem}/>
                            <label htmlFor='stem_angle'>Stem Angle</label>
                            <input className='Input' type='number' name='stem_angle' defaultValue={stem_angle}/>
                            <label htmlFor='handlebar'>Handlebar Width</label>
                            <input className='Input' type='number' name='handlebar' defaultValue={handlebar}/>
                            <label htmlFor='handlebar_bend'>Handlebar Bend</label>
                            <input className='Input' type='text' name='handlebar_bend' defaultValue={handlebar_bend}/>
                            <label htmlFor='crank'>Crank Length</label>
                            <input className='Input' type='number' name='crank' defaultValue={crank}/>
                            <label htmlFor='crank_q'>Crank Qfactor</label>
                            <input className='Input' type='number' name='crank_q' defaultValue={crank_q}/>
                            <label htmlFor='seat'>Seat Width</label>
                            <input className='Input' type='number' name='seat' defaultValue={seat}/>
                        </Section>
                        <Section className='position-section-setup'>
                            <h3>Setup</h3>
                            <label htmlFor='seat_height'>Seat Height</label>
                            <input className='Input' type='number' name='seat_height' defaultValue={seat_height}/>
                            <label htmlFor='handlebar_reach'>Handlebar Reach</label>
                            <input className='Input' type='number' name='handlebar_reach' defaultValue={handlebar_reach}/>
                            <label htmlFor='handlebar_drop'>Handlebar Drop</label>
                            <input className='Input' type='number' name='handlebar_drop' defaultValue={handlebar_drop}/>
                            <label htmlFor='setback'>Setback</label>
                            <input className='Input' type='number' name='setback' defaultValue={setback}/>
                        </Section>
                    </div>
                    <div className='position-button-div'>
                        <button className='Button' type='submit'>Save</button>
                        <button className='Button' onClick={this.handleCancel} type='reset'>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}