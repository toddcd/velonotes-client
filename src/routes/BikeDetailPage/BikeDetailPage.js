import React, {Component} from 'react'
import { Section } from '../../components/Utils/Utils'
import BikeDetailForm from '../../components/BikeDetailForm/BikeDetailForm'
import './BikeDetailPage.css'
import BIKESTORE from '../../store'

export default class BikeDetailPage extends Component {
    static defaultProps = {
        match: {params: {}},
    }

    renderBikeDetail() {
        //const bike = this.props.bike
        const bike = BIKESTORE.bikes[0]

        return (
            <>
            <h2>BIKE DETAIL 6</h2>
            <BikeDetailForm bike={bike}/>
            </>
        )
    }

    render() {
        return (
            <Section className='BikePage'>
                {this.renderBikeDetail()}
            </Section>
        )
    }
}

