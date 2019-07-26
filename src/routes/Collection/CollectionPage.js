import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import {Section} from '../../components/Utils/Utils'
import Collection from '../../components/Collection/Collection'
import BIKESTORE from '../../store'
import './CollectionPage.css'

export default class CollectionPage extends Component {

    renderCollection() {

        const {bikes = []} = BIKESTORE

        return bikes.map(bike =>
            <Collection
                key={bike.id}
                bike={bike}
            />
        )
    }

    render() {
        return (
            <Fragment>
                <Link to={`/collection/grid`} className='BikeCollection'>
                    <button>Grid View</button>
                </Link>
                <Section list className='BikeCollectionPage'>

                    {this.renderCollection()}
                </Section>
            </Fragment>
        )
    }
}
