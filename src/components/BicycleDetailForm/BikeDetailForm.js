import React, {Component, Fragment} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import Position from '../../components/Position/Position'
import Note from '../../components/Note/Note'
import './BikeDetailForm.css'
import {Link} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class BikeDetailForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    constructor() {
        super();
        this.state = {open: false};
        library.add(faChevronDown, faChevronUp)
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    renderPositions() {
        const bike = this.props.bike
        const handleDeletePosition = this.props.deletePosition
        if (bike.positions) {
            return bike.positions.map(p =>
                <Position
                    key={p.position_id}
                    position={p}
                    bike={bike}
                    handleDeletePosition={handleDeletePosition}
                />
            )
        } else {
            return <div><p>No Positions</p></div>
        }
    }

    renderNotes() {
        const bike = this.props.bike
        const handleDeleteNote = this.props.deleteNote
        if (bike.notes) {
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

    renderGeoContent(bike){
        return (
            <div className='geometry-data'>
                <div className='geo-left'>
                        Size: {bike.geometry.size}<br/><br/>
                    <span className='geo-alpha'>A</span> - Top Tube: {bike.geometry.top_tube_length}<br/>
                    <span className='geo-alpha'>B</span> - Head Tube Length: {bike.geometry.head_tube_length}<br/>
                    <span className='geo-alpha'>C</span> - Head Tube Angle: {bike.geometry.head_tube_angle}<br/>
                    <span className='geo-alpha'>D</span> - Seat Tube Length: {bike.geometry.seat_tube_length}<br/>
                    <span className='geo-alpha'>E</span> - Seat Tube Angle: {bike.geometry.seat_tube_angle}<br/>
                </div>
                <div className='geo-right'>
                    <span className='geo-alpha'>F</span> - Stack: {bike.geometry.stack}<br/>
                    <span className='geo-alpha'>G</span> - Reach: {bike.geometry.reach}<br/>
                    <span className='geo-alpha'>H</span> - Chainstay: {bike.geometry.chainstay}<br/>
                    <span className='geo-alpha'>I</span> - Wheelbase: {bike.geometry.wheelbase}<br/>
                    <span className='geo-alpha'>J</span> - BB Drop: {bike.geometry.bb_drop}<br/>
                    <span className='geo-alpha'>K</span> - Trail: {bike.geometry.trail}<br/>
                    <span className='geo-alpha'>L</span> - Rake: {bike.geometry.rake}<br/>
                </div>
            </div>
        )
    }

    render() {
        const bike = this.props.bike
        let geoData = <div></div>

        if(bike.geometry){
            geoData = this.renderGeoContent(bike)
        }

        return (
           <div className='bike-detail-container'>
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
                    <div className="geometry-container">
                        <button className="btn btn-block" onClick={this.toggle}>
                            <div className='btn-content'>
                                Geometry
                            </div>
                            <div className='div-font-awesome-chevron'>
                                {this.state.open ? <FontAwesomeIcon icon="chevron-up" className='font-awesome-chevron'/>
                                    : <FontAwesomeIcon icon="chevron-down" className='font-awesome-chevron'/>}
                            </div>
                        </button>
                        <div id="note-detail" className={"note-detail collapse" + (this.state.open ? ' in' : '') }>
                            <div className='geometry-content'>
                                {geoData}
                            </div>
                        </div>
                    </div>
                    <div>
                        <img alt='geometry legend' className='geometry-image' src={require('../../images/geometry-800updatedpx.png')}/>
                    </div>
                </section>
                <section className='position-section'>
                    <div className='button-right'>
                        <Link to={`/gallery/${bike.user_bike_id}/addposition`}>
                            <button className='addpos-button'>Add Position</button>
                        </Link>
                    </div>
                    {this.renderPositions()}
                </section>
                <section className='notes-section'>
                    <div className='button-right'>
                        <Link className='button-link' to={`/gallery/${bike.user_bike_id}/addnote`}>
                            <button className='addnote-button'>Add Note</button>
                        </Link>
                    </div>
                    {this.renderNotes()}
                </section>
           </div>
        )
    }
}
