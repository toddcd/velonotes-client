import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
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

        BicycleApiService.getMakeData()
            .then(this.context.setMakeDataList)
            .then()
            .catch(this.context.setError)

        BicycleApiService.getSizeData()
            .then(this.context.setSizeDataList)
            .then()
            .catch(this.context.setError)
    }

    renderBicycleGallery() {
        const {userBikeList} = this.context
        const bicycles = userBikeList.bicycles

        if (bicycles) {
            return (
                <Fragment>
                    <div >
                        <Link to={`/gallery/newbike`} className='gallery_new_bike'>
                            <button className='Button'>Add Bicycle</button>
                        </Link>
                        <Link to={`/grid`} className='gallery_grid_view'>
                            <button className='Button'>Grid View</button>
                        </Link>
                    </div>
                    <div className='BikeCollectionPage'>
                    {bicycles.map(bike =>
                        <BicycleGallery
                            key={bike.user_bike_id}
                            bike={bike}
                        />)}
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Link to={`/gallery/newbike`} className='gallery_new_bike'>
                    <button className='Button'>Add Bicycle</button>
                </Link>
            )
        }
    }

    render() {
        const {error} = this.context
        return (
            <Section >
                {error
                    ? <p className='red'>{'There was an error. Are you logged in?'}</p>
                    : this.renderBicycleGallery()}
            </Section>
        )
    }
}
