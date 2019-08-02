import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
//import { Section } from '../../components/Utils/Utils'
import BicycleGrid from '../../components/BicycleGrid/BicycleGrid'
import BIKESTORE from '../../store'

//import './BicycleGridPage.css'

export default class BicycleGridPage extends Component {

    renderCollection() {
        const { bikes = []} = BIKESTORE
        return <BicycleGrid bikes={bikes} />
    }

    render() {
        return (
            <Fragment>
                <Link to={`/gallery`} className='BikeCollection'>
                    <button>Gallery View</button>
                </Link>
            <BicycleGrid list className='CollectionGridPage'>
                {this.renderCollection()}
            </BicycleGrid>
            </Fragment>
        )
    }
}
