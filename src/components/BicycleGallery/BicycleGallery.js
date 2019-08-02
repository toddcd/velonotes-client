import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BicycleGallery.css'

export default class BicycleGallery extends Component {

  render() {
    const { bike } = this.props
      //const image = '../../images/geometry-400px.png'

    return (
      <Link to={`/gallery/${bike.user_bike_id}`} className='BikeCollection'>
       <div className='BikeCollection__details_top' >
        <img alt="bicycle brand logo" className='BikeCollection__image' src={require('../../images/geometry-400px.png') } />
        <div className='BikeCollection__details_right'>
          <div className='BikeCollection__text'>
            <h2 className='BikeCollection__heading'>{bike.nickName}</h2>
              <div>
                {bike.make}<br/>
                {bike.model}<br/>
                {bike.year}<br/>
            </div>
          </div>
        </div>
       </div>
      </Link>
    )
  }
}
