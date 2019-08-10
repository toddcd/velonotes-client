import React, {Component} from 'react'
import './Position.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Position extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    static
    defaultProps = {
        handlePositionUpdate: () => {
        },
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleUpdate = (event) => {
        event.preventDefault()

    }

    render() {
        const position = this.props.position;
        const bike = this.props.bike
        return (
            <div className="position-container">
                <button className="btn btn-block" onClick={ this.toggle }>
                    <div className='btn-content'>
                       Position: {this.props.position.name}
                    </div>
                    <div className='div-font-awesome-chevron'>
                        {this.state.open ? <FontAwesomeIcon icon="chevron-up" className='font-awesome-chevron'/>
                            : <FontAwesomeIcon icon="chevron-down" className='font-awesome-chevron'/>}
                    </div>
                </button>
                <div id="position-details" className={"position-detail collapse" + (this.state.open ? ' in' : '')}>
                    <Link to={{
                        pathname:`/gallery/${bike.user_bike_id}/editposition`,
                        state:{
                            editPosition: this.props.position
                        }
                    }}>
                        <button className='delete-edit-button' data-id={position.position_id} >Edit</button>
                    </Link>
                    <button className='delete-edit-button' data-id={position.position_id} onClick={this.props.handleDeletePosition}>Delete</button>
                    <div className='position'>
                        <div className='left'>
                            <p>
                                Name: {position.name}<br/>
                                Desc: {position.description}<br/><br/>
                                Crank Length: {position.crank}<br/>
                                Stem Length/Angle: {position.stem}/{position.stem_angle}<br/>
                                Handlebar Width: {position.handlebar}<br/>
                                Seat Width: {position.seat}
                            </p>
                        </div>
                        <div className='right'>
                            <br/>
                            <br/>
                            <br/>
                            Seat Height (C-Top): {position.seat_height}<br/>
                            Bar Reach (C-Tip): {position.handlebar_reach}<br/>
                            Bar Drop: {position.handlebar_drop}<br/>
                            Setback: {position.setback}<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}