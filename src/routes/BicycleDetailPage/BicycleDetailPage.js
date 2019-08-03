import React, {Component} from 'react'
import BikeContext from '../../context/BikeContext'
import BicycleApiService from '../../services/bicycle-api-service'
import {Section} from '../../components/Utils/Utils'
import BikeDetailForm from '../../components/BicycleDetailForm/BikeDetailForm'
import './BicycleDetailPage.css'

export default class BicycleDetailPage extends Component {
    static defaultProps = {
        match: {params: {}},
    }

    static contextType = BikeContext

    componentDidMount() {
        const {bikeId} = this.props.match.params
        this.context.clearError()

        BicycleApiService.getBike(bikeId)
            .then(bike => {
                this.context.setBike(bike.bicycles[0])
            })
            .catch(this.context.setError)
    }

    handleDeletePosition = (event) => {
        const position_id = event.target.dataset.id;

        BicycleApiService.deletePosition(position_id)
            .then(this.context.removePosition(position_id))
            .catch(this.context.setError)
    }

    handleDeleteNote = (event) => {
        const note_id = event.target.dataset.id;

        BicycleApiService.deleteNote(note_id)
            .then(this.context.removeNote(note_id))
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBike()
    }

    renderBikeDetail() {
        const {bike} = this.context
        if (bike) {
            return (
                <>
                    <h2>{bike.make}</h2>
                    <BikeDetailForm
                        deleteNote={this.handleDeleteNote}
                        deletePosition={this.handleDeletePosition}
                        bike={bike}
                    />
                </>
            )
        }
    }

    render() {
        const {error} = this.context
        return (
            <Section list className='BikeDetailPage'>
                {error
                    ? <p className='red'>There was an error. Are you logged in?</p>
                    : this.renderBikeDetail()}
            </Section>
        )
    }
}

