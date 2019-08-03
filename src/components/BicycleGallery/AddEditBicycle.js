import React, {Component} from 'react'
import BicyclesContext from "../../context/BicyclesContext";
import BicycleApiService from "../../services/bicycle-api-service";
import './BicycleGallery.css'
import {Input} from "../Utils/Utils";

export default class AddEditBicycle extends Component {
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
        const bike = {
            mfr_bike_id: parseFloat(event.target.year.value),
            nick_name: event.target.nick_name.value,
            geo_id: parseFloat(event.target.size.value),
        }

        BicycleApiService.postBike(bike)
            .then(newBike =>
               this.props.history.push(`/gallery/${newBike.user_bike_id}`)
            )
            .catch(this.context.setError)
    }

    // handleUpdateBicycle = (event) => {
    //     event.preventDefault()
    //     const {bikeId} = this.props.match.params
    //     const note = {
    //         mfr_bike_id: event.target.mfr_bike_id.value,
    //         nick_name: event.target.nick_name.value,
    //         geo_id: event.target.geo_id.value
    //     }
    //
    //     BicycleApiService.patchNote(bikeId, note)
    //         .then(() =>
    //             this.props.history.push(`/gallery/${bikeId}`)
    //         )
    //         .catch(this.context.setError)
    // }

    handleMakeSelect = (e) => {
        this.setState(
            {
                modelOptions: this.state.model.filter(model =>
                    model[1].parent === e.target.value
                )
            })
    }

    handleModelSelect = (e) => {
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

    render() {
        const { handleSubmit, title, mfr_bike_id,
                nick_name, geo_id, makeOption,
                modelOption, yearOption, sizeOption} = this.setFormValues()
        return (
            <div className='add-note'>
                <h2>{title}</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='make'>Make</label>
                    <select className='Select' name='make' type='select' defaultValue={makeOption}>
                        <option value="DEFAULT" disabled>Choose a manufacturer ...</option>
                        {this.state.make.map(make =>
                            <option onClick={this.handleMakeSelect}
                                    key={make[1].mfr_bike_id}>{make[1].child}
                            </option>
                        )}
                    </select>
                    <label htmlFor='model'>Model</label>
                    <select className='Select' name='model' type='select' defaultValue={modelOption}>
                        <option value="DEFAULT" disabled>Choose a model ...</option>
                        {this.state.modelOptions.map(model =>
                            <option onClick={this.handleModelSelect}
                                    key={model[1].mfr_bike_id}>{model[1].child}
                            </option>
                        )}
                    </select>
                    <label htmlFor='year'>Year</label>
                    <select className='Select' name='year' type='select' defaultValue={yearOption}>
                        <option value="DEFAULT" disabled>Choose a year ...</option>
                        {this.state.yearOptions.map(year =>
                            <option onClick={this.handleYearSelect}
                                    key={year[1].mfr_bike_id} value={year[1].mfr_bike_id}>{year[1].child}
                            </option>
                        )}
                    </select>
                    <label htmlFor='size'>Size</label>
                    <select className='Select' name='size' type='select' defaultValue={sizeOption}>
                        <option value="DEFAULT" disabled>Choose a size ...</option>
                        {this.state.sizeOptions.map(size =>
                            <option key={size.geo_id}
                                    value={size.geo_id}>{size.size}
                            </option>
                        )}
                    </select>
                    <label htmlFor='nick_name'>Nickname</label>
                    <Input className='Input' name='nick_name' defaultValue={nick_name}/>
                    <div>
                        <button className='Button' type='submit'>Save</button>
                        <button className='Button' onClick={this.handleCancel} type='reset'>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

