import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
//import { Section } from '../../components/Utils/Utils'
import BicycleGrid from '../../components/BicycleGrid/BicycleGrid'
import BicycleApiService from "../../services/bicycle-api-service";
import BicyclesContext from "../../context/BicyclesContext";
import {Section} from "../../components/Utils/Utils";
import './GridViewPage.css'

//import './BicycleGridPage.css'

export default class BicycleGridPage extends Component {
    static contextType = BicyclesContext

    componentDidMount() {
        this.context.clearError()
        BicycleApiService.getGridBikes()
            .then(this.context.setBikeList)
            .then()
            .catch(this.context.setError)
    }

    buildRowDate(userBikeList){
        const bikeList = Object.entries(userBikeList)
        const rowData = []
        bikeList.map(bike =>
            rowData.push(
                {
                    active	:bike[1].active,
                    bb_drop	:bike[1].bb_drop,
                    chainstay:bike[1].chainstay,
                    crank:bike[1].crank,
                    date_created:bike[1].date_created,
                    description:bike[1].description,
                    geo_id:bike[1].geo_id,
                    handlebar:bike[1].handlebar,
                    handlebar_drop:bike[1].handlebar_drop,
                    handlebar_reach:bike[1].handlebar_reach,
                    head_tube_angle:bike[1].head_tube_angle,
                    head_tube_length:bike[1].head_tube_length,
                    make:bike[1].make,
                    mfr_bike_id:bike[1].mfr_bike_id	,
                    model:bike[1].model,
                    name:bike[1].name,
                    position_id:bike[1].position_id,
                    rake:bike[1].rake,
                    reach:bike[1].reach,
                    seat:bike[1].seat,
                    seat_height:bike[1].seat_height,
                    seat_tube_angle:bike[1].seat_tube_angle,
                    seat_tube_length:bike[1].seat_tube_length,
                    setback:bike[1].setback,
                    size:bike[1].size,
                    stack:bike[1].stack,
                    standover:bike[1].standover,
                    stem:bike[1].stem,
                    stem_angle:bike[1].stem_angle,
                    top_tube_length:bike[1].top_tube_length,
                    trail:bike[1].trail,
                    user_bike_id:bike[1].user_bike_id,
                    user_id:bike[1].user_id,
                    wheelbase:bike[1].wheelbase,
                    year:bike[1].year
                }
            )
        )
        return rowData
    }

    renderBicycleGallery() {
        const {userBikeList} = this.context
        const rowData = this.buildRowDate(userBikeList)

        return (
            <Fragment>
                <Link to={`/gallery`} >
                    <button className='grid-view-button'>Gallery View</button>
                </Link>
                <BicycleGrid rowData={rowData}  />
            </Fragment>
        )
    }

    render() {
        const {error} = this.context
        return (
            <Section  >
                {error
                    ? <p className='red'>{'There was an error. Are you logged in?'}</p>
                    : this.renderBicycleGallery()}
            </Section>
        )
    }
}
