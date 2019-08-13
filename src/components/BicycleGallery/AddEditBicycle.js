import React, {Component, Fragment} from 'react'
import BicyclesContext from "../../context/BicyclesContext";
import BicycleApiService from "../../services/bicycle-api-service";
import './poc.css'

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
            return make[1].type === 'make'
        })

        const model = mlist.filter((model) => {
            return model[1].type === 'model'
        })

        const year = mlist.filter((year) => {
            return year[1].type === 'year'
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

        let nickName = ''
        if (!event.target.nick_name.value) {
            nickName = make[1].parent
        } else {
            nickName = event.target.nick_name.value
        }

        const bike = {
            mfr_bike_id: parseFloat(event.target.year.value),
            nick_name: nickName,
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
                    size.mfr_bike_id.toString() === e.target.value.toString()
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
        }
        return formValues
    }

    renderMake() {
        return (
            <Fragment>
                <label htmlFor='ul-items'>Make</label>
                <ul className='ul-items'>
                    {this.state.make.map((make, i) =>
                        <li className={i === 0 ? 'list-item ui-year ui-first' : 'list-item ui-year'} key={make[1].mfr_bike_id}>
                            <label className='list-item-label' htmlFor='make'>{make[1].child}</label>
                            <input className='form-radio' type="radio" name="make" onClick={this.handleMakeSelect}
                                   value={make[1].parent}/>
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }

    renderModel() {
        return (
            <Fragment>
                <label htmlFor='ul-items'>Model</label>
                <ul className='ul-items'>
                    {this.state.modelOptions.map((model,i) =>
                        <li className={i === 0 ? 'list-item ui-year ui-first' : 'list-item ui-year'} key={model[1].mfr_bike_id}>
                            <label className='list-item-label' htmlFor='model'>{model[1].child}</label>
                            <input className='form-radio' type='radio' name='model' onClick={this.handleModelSelect}
                                   value={model[1].child}/>
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }

    renderYear() {
        return (
            <Fragment>
                <label htmlFor='ul-items'>Year</label>
                <ul className='ul-items'>
                    {this.state.yearOptions.map((year, i) =>
                        <li className={i === 0 ? 'list-item ui-year ui-first' : 'list-item ui-year'} key={year[1].mfr_bike_id}>
                            <label className='list-item-label' htmlFor='year'>{year[1].child}</label>
                            <input className='form-radio' type="radio" name="year" onClick={this.handleYearSelect}
                                   value={year[1].mfr_bike_id}/>
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }

    renderSize() {
        return (
            <Fragment>
                <label htmlFor='ul-items'>Size</label>
                <ul className='ul-items'>
                    {this.state.sizeOptions.map((size,i) =>
                        <li className={i === 0 ? 'list-item ui-year ui-first' : 'list-item ui-year'} key={size.geo_id}>
                            <label className='list-item-label' htmlFor='year'>{size.size}</label>
                            <input className='form-radio' type="radio" name="size" value={size.geo_id}/>
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }

    render() {

        return (
            <div className='form-container'>
                <h2>{'Add Bicycle'}</h2>
                <form id='new-bike-form' className='poc-new-bike-form' onSubmit={this.handleAddBicycle}>
                    <label className='nickname-label' htmlFor='nick_name'>Nickname</label>
                    <input className='Input' name='nick_name' required/>
                    {this.renderMake()}
                    {this.state.modelOptions.length === 0 ? <div/> : this.renderModel()}
                    {this.state.yearOptions.length === 0 ? <div/> : this.renderYear()}
                    {this.state.sizeOptions.length === 0 ? <div/> : this.renderSize()}
                    <div className='position-button-div'>
                        <button className='add-bike-event-button' type='submit'>Save</button>
                        <button className='add-bike-event-button' onClick={this.handleCancel} type='reset'>Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

