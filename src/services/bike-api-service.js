import config from "../config"
import TokenService from "../services/token-service"

const BikeApiService = {
    getBikes() {

        return fetch(`${config.API_ENDPOINT}/collection`, {
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
        return fetch(`${config.API_ENDPOINT}/collection/${bikeId}`, {
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
        return fetch(`${config.API_ENDPOINT}/collection/${bikeId}/positions`, {
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
    postPosition(bikeId, position) {
        return fetch(`${config.API_ENDPOINT}/positions`, {
            method: "POST",
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                bike_id: bikeId,
                position: position,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getNotes(bikeId) {
        return fetch(`${config.API_ENDPOINT}/collection/${bikeId}/notes`, {
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
    postNote(bikeId, note) {
        return fetch(`${config.API_ENDPOINT}/positions`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                bike_id: bikeId,
                position: note,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default BikeApiService
