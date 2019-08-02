import React, {Component} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import './Position.css'

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

        const p = this.props.position;

        return (
            <div className="position-container">
                <button className="btn btn-block" onClick={ this.toggle }>
                    position
                </button>
                <div id="position-details" className={"collapse" + (this.state.open ? ' in' : '')}>
                    <br/>
                    <button>Edit</button>
                    <button>Delete</button>
                    <div className='position'>
                        <div className='left'>
                            <p>
                                Name: {p.name}<br/>
                                Desc: {p.desc}<br/><br/>

                                Crank Length: {p.crank}<br/>
                                Stem Length/Angle: {p.stem}/{p.stemAngle}<br/>
                                Handlebar Width: {p.handleBar}<br/>
                                Seat Width: {p.seat}
                            </p>
                        </div>
                        <div className='right'>
                            <br/>
                            <br/>
                            <br/>
                            Seat Height (C-Top): {p.seatHeight}<br/>
                            Bar Reach (C-Tip): {p.reach}<br/>
                            Bar Drop: {p.drop}<br/>
                            Setback: {p.setback}<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}