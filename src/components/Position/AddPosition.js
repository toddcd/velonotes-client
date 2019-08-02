import React from 'react'

function AddPosition(props){
    return(
        <div>
            <form >
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                <button type='submit'>Save</button>
                <button type='reset'>Cancel</button>
            </form>
        </div>
    )
}

export default AddPosition;