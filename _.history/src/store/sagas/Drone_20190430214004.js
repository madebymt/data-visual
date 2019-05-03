import {takeLatest, call, put} from "redux-saga/effects";
import delay from '@redux-saga/delay-p'
import "isomorphic-fetch";

// API URL
const url = 'https://react-assessment-api.herokuapp.com/api/drone';

// redux saga watch changing
export function * watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDrone() {
    return (fetch(url).then(function (res) {
        return res.json();
    }).then(function (json) {
        return json;
    }))
}

function * workerSaga() {
    // Fetch new data every 4 seconds to get new data
    while (true) {
        try {
            const response = yield call(fetchDrone);
            const droneData = response.data;
            console.log('Drone Sagas', droneData )
            console.log('Drone Sagas response', response )

            // dispatch a success action to the store with the new data
            yield put({type: "API_CALL_SUCCESS", droneData});

        } catch (error) {
            // dispatch a failure action to the store with the error
            yield put({type: "API_CALL_FAILURE", error});
        }

        yield delay(4000);
    }

}

export default[workerSaga];
