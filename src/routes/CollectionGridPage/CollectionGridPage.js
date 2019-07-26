import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import CollectionGrid from '../../components/CollectionGrid/CollectionGrid'
import BIKESTORE from '../../store'

//import './CollectionGridPage.css'

export default class CollectionGridPage extends Component {

    renderCollection() {
        const { bikes = []} = BIKESTORE
        return <CollectionGrid bikes={bikes} />
    }

    render() {
        return (
            <Fragment>
                <Link to={`/collection`} className='BikeCollection'>
                    <button>Collection View</button>
                </Link>
            <CollectionGrid list className='CollectionGridPage'>
                {this.renderCollection()}
            </CollectionGrid>
            </Fragment>
        )
    }
}
