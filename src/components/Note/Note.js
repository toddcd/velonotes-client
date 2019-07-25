import React, {Component} from 'react'
//import {Button, Input, Section} from '../Utils/Utils'
import './Note.css'

export default class Note extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    static
    defaultProps = {
        handlePositionUpdate: () => {
        },
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    handleUpdate = (event) => {
        event.preventDefault()

    }

    render() {

        const n = this.props.note
        console.log(n)

        return (
            <div className="note-container">
                <button className="btn btn-block" onClick={this.toggle.bind(this)}>
                    note
                </button>
                <div id="note-detail" className={"collapse" + (this.state.open ? ' in' : '')}>
                    <br/>
                    <button>Edit</button>
                    <button>Delete</button>
                    <br/>
                    Note: {n.note}
                </div>
            </div>
        )
    }
}