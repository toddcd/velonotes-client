import React, {Component, Fragment} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import Position from '../../components/Position/Position'
import Note from '../../components/Note/Note'
import BIKESTORE from '../../store'
import './BikeDetailForm.css'

export default class BikeDetailForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    handleUpdate = (event) => {
        event.preventDefault()
        console.log('Persist updates to the database.')
    }

    renderPositions() {
        const positions = BIKESTORE.bikes[0].positions
        return positions.map(p =>
            <Position
                key={p.id}
                position={p}
            />
        )
    }

    renderNotes() {
        const notes = BIKESTORE.bikes[0].notes
        return notes.map(n =>
            <Note
                key={n.id}
                note={n}
            />
        )
    }

    render() {

        console.log(BIKESTORE.bikes[0])
        const bike = BIKESTORE.bikes[0]

        return (
            <Fragment>
                <section className='detail-section-top'>
                    <div className='detail-section'>
                        <div className='left'>
                            {bike.makeModel.name}<br/>
                            {bike.makeModel.model.name}<br/>
                            {bike.makeModel.model.size.name}
                        </div>
                        <div className='right'>
                            {bike.nickName}<br/>
                            {bike.serial}<br/>
                            {bike.purchaseDate}
                        </div>
                    </div>
                    <img src={require('../../images/geometry-400px.png')}/>
                </section>
                <section className='position-section'>
                    {this.renderPositions()}
                </section>
                <section className='note-section'>
                    {this.renderNotes()}
                </section>
            </Fragment>
        )
    }
}
