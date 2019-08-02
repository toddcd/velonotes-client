import React, {Component} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import './Note.css'
import {Link} from "react-router-dom";

export default class Note extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    static
    defaultProps = {
        handleNoteUpdate: () => {
        },
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const n = this.props.note
        const bike = this.props.bike
        return (
            <div className="note-container">
                <button className="btn btn-block" onClick={ this.toggle }>
                    {n.type} ({n.note.substring(0, 12)}...)
                </button>
                <div id="note-detail" className={"collapse" + (this.state.open ? ' in' : '')}>
                    <Link to={{
                        pathname:`/gallery/${bike.user_bike_id}/editnote`,
                        state:{
                            editNote: this.props.note
                        }
                    }}>
                        <button className='delete-edit-button' data-id={n.note_id} >Edit</button>
                    </Link>
                    <button className='delete-edit-button' data-id={n.note_id} onClick={this.props.handleDeleteNote}>Delete</button>
                    <div className='note-content'>
                        <p>{n.note}</p>
                    </div>
                </div>
            </div>
        )
    }
}