import React, {Component, Fragment} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import Position from '../../components/Position/Position'
import Note from '../../components/Note/Note'
import './BikeDetailForm.css'
import {Link} from "react-router-dom";

export default class BikeDetailForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    renderPositions() {
        const positions = this.props.bike.positions
        if(positions) {
            return positions.map(p =>
                <Position
                    key={p.position_id}
                    position={p}
                />
            )
        }else{
            return <div><p>No Positions</p></div>
        }
    }

    renderNotes() {
        const bike = this.props.bike
        const handleDeleteNote = this.props.deleteNote
        if(bike.notes) {
            return bike.notes.map(n =>
                <Note
                    key={n.note_id}
                    note={n}
                    bike={bike}
                    handleDeleteNote={handleDeleteNote}
                />
            )
        } else {
            return <div><p>No Notes</p></div>
        }
    }

    render() {
        const bike = this.props.bike
        return (
            <Fragment>
                <section className='detail-section-top'>
                    <div className='detail-section'>
                        <div className='left'>
                            {bike.make}<br/>
                            {bike.model}<br/>
                        </div>
                        <div className='right'>
                            {bike.nickName}<br/>
                            {bike.serial}<br/>
                            {bike.purchaseDate}
                        </div>
                    </div>
                    <img alt='geometry legend' src={require('../../images/geometry-400px.png')}/>
                </section>
                <section className='position-section'>
                    <Link to={`/gallery/${bike.user_bike_id}/addposition`}>
                        <button>Add Position</button>
                    </Link>
                    {this.renderPositions()}
                </section>
                <section className='note-section'>
                    <Link to={`/gallery/${bike.user_bike_id}/addnote`}>
                        <button>Add Note</button>
                    </Link>
                    {this.renderNotes()}
                </section>
            </Fragment>
        )
    }
}
