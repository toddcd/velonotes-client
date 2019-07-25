import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import BikeCollection from '../../components/BikeCollection/BikeCollection'
import BIKESTORE from '../../store'
import './BikeCollectionPage.css'

export default class BikeCollectionPage extends Component {

  renderCollection() {

    const { bikes = []} = BIKESTORE

      return bikes.map(bike =>
      <BikeCollection
        key={bike.id}
        bike={bike}
      />
    )
  }

  render() {
    return (
      <Section list className='BikeCollectionPage'>
          {this.renderCollection()}
      </Section>
    )
  }
}
