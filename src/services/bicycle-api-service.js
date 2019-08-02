import config from "../config"
import TokenService from "../services/token-service"

const BicycleApiService = {
    getBikes() {
        return fetch(`${config.API_ENDPOINT}/bicycles`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getBike(bikeId) {
        return fetch(`${config.API_ENDPOINT}/bicycles/${bikeId}`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getPositions(bikeId) {
        return fetch(`${config.API_ENDPOINT}/positions/${bikeId}/positions`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postPosition(position) {
        console.log(JSON.stringify(position))
        return fetch(`${config.API_ENDPOINT}/positions`, {
            method: "POST",
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(position),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    patchPosition(position){
        return fetch(`${config.API_ENDPOINT}/positions/${position.position_id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(position),
        })
            .then(res => {
                if (!res.ok) {
                    res.json().then(e => Promise.reject(e))
                }
            })
    },
    deletePosition(positionId) {
        return fetch(`${config.API_ENDPOINT}/positions/${positionId}`, {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    res.json().then(e => Promise.reject(e))
                }
            })
    },
    getNotes(bikeId) {
        return fetch(`${config.API_ENDPOINT}/notes/${bikeId}`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteNote(noteId) {
        return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    res.json().then(e => Promise.reject(e))
                }
            })
    },

    postNote(bikeId, note) {
        return fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                user_bike_id: bikeId,
                note_type: note.note_type,
                note: note.note
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    patchNote(bikeId, note){
        return fetch(`${config.API_ENDPOINT}/notes/${note.note_id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                user_bike_id: bikeId,
                note_id: note.note_id,
                note_type: note.note_type,
                note: note.note
            }),
        })
            .then(res => {
                if (!res.ok) {
                    res.json().then(e => Promise.reject(e))
                }
            })
    }
}

export default BicycleApiService
