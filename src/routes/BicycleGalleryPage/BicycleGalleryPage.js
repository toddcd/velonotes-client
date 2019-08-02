import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import BicyclesContext from '../../context/BicyclesContext'
import BicycleApiService from '../../services/bicycle-api-service'
import {Section} from '../../components/Utils/Utils'
import BicycleGallery from '../../components/BicycleGallery/BicycleGallery'
import './BicycleGalleryPage.css'

export default class BicycleGalleryPage extends Component {
    static contextType = BicyclesContext

    componentDidMount() {
        this.context.clearError()
        BicycleApiService.getBikes()
            .then(this.context.setBikeList)
            .then()
            .catch(this.context.setError)
    }

    renderBicycleGallery() {
        const { userBikeList } = this.context
        const bicycles = userBikeList.bicycles
        if(bicycles) {
            return bicycles.map(bike =>
                <BicycleGallery
                    key={bike.user_bike_id}
                    bike={bike}
                />
            )
        }
    }

    render() {
        const { error } = this.context
        return (
            <Fragment>
                <Link to={`/grid`} className='BikeCollection'>
                    <button>Grid View</button>
                </Link>
                <Section list className='BikeCollectionPage'>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderBicycleGallery()}
                </Section>
            </Fragment>
        )
    }
}
