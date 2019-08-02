import React, {Component} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import './Position.css'
import {Link} from "react-router-dom";

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
        return (
            <div className="position-container">
                <button className="btn btn-block" onClick={ this.toggle }>
                    position
                </button>
                <div id="position-details" className={"collapse" + (this.state.open ? ' in' : '')}>

                    <Link to={{
                        pathname:`/gallery/${position.user_bike_id}/editposition`,
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
                                Desc: {position.desc}<br/><br/>

                                Crank Length: {position.crank}<br/>
                                Stem Length/Angle: {position.stem}/{position.stemAngle}<br/>
                                Handlebar Width: {position.handleBar}<br/>
                                Seat Width: {position.seat}
                            </p>
                        </div>
                        <div className='right'>
                            <br/>
                            <br/>
                            <br/>
                            Seat Height (C-Top): {position.seatHeight}<br/>
                            Bar Reach (C-Tip): {position.reach}<br/>
                            Bar Drop: {position.drop}<br/>
                            Setback: {position.setback}<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}