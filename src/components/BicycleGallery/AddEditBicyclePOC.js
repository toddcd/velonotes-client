import React, {Component, Fragment} from 'react'
import BicyclesContext from "../../context/BicyclesContext";
import BicycleApiService from "../../services/bicycle-api-service";
import './BicycleGallery.css'
import './poc.css'
import {Input} from "../Utils/Utils";

export default class AddEditBicyclePOC extends Component {
    static contextType = BicyclesContext
    state = {
        make: [],
        model: [],
        year: [],
        size: [],
        makeOptions: [],
        modelOptions: [],
        yearOptions: [],
        sizeOptions: [],
    };

    componentDidMount() {
        const {makeDataList, sizeDataList} = this.context
        const sList = Object.entries(sizeDataList)
        const mlist = Object.entries(makeDataList)

        const make = mlist.filter((make) => {
            if (make[1].type === 'make') {
                return make[1]
            }
        })

        const model = mlist.filter((model) => {
            if (model[1].type === 'model') {
                return model[1]
            }
        })
        const year = mlist.filter((year) => {
            if (year[1].type === 'year') {
                return year[1]
            }
        })
        const size = sList.map((size) => {
            return size[1]
        })

        this.setState(
            {
                make: make,
                model: model,
                year: year,
                size: size
            })
    }

    handleAddBicycle = (event) => {
        event.preventDefault()
        const make = this.state.make.find(make => {
            return make[1].mfr_bike_id === parseInt(event.target.year.value)
        })

        console.log('EVENT')
        console.log(make)

        const bike = {
            mfr_bike_id: parseFloat(event.target.year.value),
            nick_name: 'POC2',
            geo_id: parseFloat(event.target.size.value),
        }

        BicycleApiService.postBike(bike)
            .then(newBike =>
                this.props.history.push(`/gallery/${newBike.user_bike_id}`)
            )
            .catch(this.context.setError)
    }

    handleMakeSelect = (e) => {
        this.setState(
            {
                modelOptions: this.state.model.filter(model =>
                    model[1].parent === e.target.value
                )
            })
    }

    handleModelSelect = (e) => {
        console.log('MAKE FIRED!!!')
        console.log(e.target.value)
        this.setState(
            {
                yearOptions: this.state.year.filter(year =>
                    year[1].parent === e.target.value
                )
            })
    }

    handleYearSelect = (e) => {
        this.setState(
            {
                sizeOptions: this.state.size.filter(size =>
                    size.mfr_bike_id == e.target.value
                )[0].sizes
            })
    }

    handleCancel = () => {
        this.props.history.push(`/gallery`)
    }

    // Set form values based on Add or Edit mode. If a existing note is passed
    // into the addEditNote component through location.state, then Edit mode
    setFormValues = () => {
        let editBicycle = null
        if (this.props.location.state) {
            editBicycle = this.props.location.state.editBicycle
        }
        const formValues = {
            'handleSubmit': this.handleAddBicycle,
            'makeOption': 'DEFAULT',
            'modelOption': 'DEFAULT',
            'yearOption': 'DEFAULT',
            'sizeOption': 'DEFAULT',
            'title': 'Add Bicycle',
            'mfr_bike_id': null,
            'nick_name': null,
            'geo_id': null
        }

        if (editBicycle) {
            formValues.title = 'Edit Bicycle'
            formValues.handleSubmit = this.handleUpdateBicycle
            // formValues.note_id = editNote.note_id
            // formValues.note_type = editNote.note_type
            // formValues.note = editNote.note
        }
        return formValues
    }

    renderMake() {
        return (
            <ul className='ul-items'>
                {this.state.make.map(make =>
                    <li className='list-item ui-make' key={make[1].mfr_bike_id}>
                        <label className='list-item-label' htmlFor='make'>{make[1].child}</label>
                        <input className='form-radio' type="radio" name="make" onClick={this.handleMakeSelect}
                               value={make[1].parent}/>
                    </li>
                )}
            </ul>
        )
    }

    renderModel() {
        return (
            <ul className='ul-items'>
                {this.state.modelOptions.map(model =>
                    <li className='list-item ui-model' key={model[1].mfr_bike_id}>
                        <label className='list-item-label' htmlFor='model'>{model[1].child}</label>
                        <input className='form-radio' type='radio' name='model' onClick={this.handleModelSelect}
                               value={model[1].child}/>
                    </li>
                )}
            </ul>
        )
    }

    renderYear() {
        return (
            <ul className='ul-items'>
                {this.state.yearOptions.map(year =>
                    <li className='list-item ui-year' key={year[1].mfr_bike_id}>
                        <label className='list-item-label' htmlFor='year'>{year[1].child}</label>
                        <input className='form-radio' type="radio" name="year" onClick={this.handleYearSelect}
                               value={year[1].mfr_bike_id}/>
                    </li>
                )}
            </ul>
        )
    }

    renderSize() {
        return (
            <ul className='ul-items'>
                {this.state.sizeOptions.map(size =>
                    <li className='list-item ui-size' key={size.geo_id}>
                        <label className='list-item-label' htmlFor='year'>{size.size}</label>
                        <input className='form-radio' type="radio" name="size" value={size.geo_id}/>
                    </li>
                )}
            </ul>
        )
    }

    render() {
        return (<div className='form-container'>
                <form id='new-bike-form' className='poc-new-bike-form' onSubmit={this.handleAddBicycle}>
                    {this.renderMake()}
                    {this.state.modelOptions.length === 0 ? <div/> : this.renderModel()}
                    {this.state.yearOptions.length === 0 ? <div/> : this.renderYear()}
                    {this.state.sizeOptions.length === 0 ? <div/> : this.renderSize()}
                    <label htmlFor='nick_name'>Nickname</label>
                    <Input className='Input' name='nick_name' required/>
                    <div className='position-button-div'>
                        <button className='position-event-button' type='submit'>Save</button>
                        <button className='position-event-button' onClick={this.handleCancel} type='reset'>Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

