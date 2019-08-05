import React, {Component, Fragment} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

import './Note.css'
import {Link} from "react-router-dom";

export default class Note extends Component {
    constructor() {
        super();
        this.state = {open: false};
        library.add(faChevronDown, faChevronUp)
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
        const note = this.props.note
        const bike = this.props.bike
        return (
                <div className="note-container">
                    <button className="btn btn-block" onClick={this.toggle}>
                        <div className='btn-content'>
                            {note.type} ({note.note.substring(0, 12)}...)
                        </div>
                        <div className='div-font-awesome-chevron'>
                            {this.state.open ? <FontAwesomeIcon icon="chevron-up" className='font-awesome-chevron'/>
                            : <FontAwesomeIcon icon="chevron-down" className='font-awesome-chevron'/>}
                        </div>
                    </button>
                    <div id="note-detail" className={"note-detail collapse" + (this.state.open ? ' in' : '') }>
                        <Link to={{
                            pathname: `/gallery/${bike.user_bike_id}/editnote`,
                            state: {
                                editNote: this.props.note
                            }
                        }}>
                            <button className='delete-edit-button' data-id={note.note_id}>Edit</button>
                        </Link>
                        <button className='delete-edit-button' data-id={note.note_id}
                                onClick={this.props.handleDeleteNote}>Delete
                        </button>
                        <div className='note-content'>
                            {note.note}
                        </div>
                    </div>
                </div>
        )
    }
}