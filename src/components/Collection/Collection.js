import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Collection.css'

export default class Collection extends Component {

  render() {
    const { bike } = this.props
      const image = '../../images/geometry-400px.png'

    return (
      <Link to={`/collection/${bike.id}`} className='BikeCollection'>
       <div className='BikeCollection__details_top' >
        <img className='BikeCollection__image' src={require('../../images/geometry-400px.png') } />
        <div className='BikeCollection__details_right'>
          <div className='BikeCollection__text'>
            <h2 className='BikeCollection__heading'>{bike.nickName}</h2>
              <div>
                {bike.makeModel.name}<br/>
                {bike.makeModel.model.name}<br/>
                {bike.makeModel.model.category}<br/>
            </div>
          </div>
        </div>
       </div>
      </Link>
    )
  }
}
