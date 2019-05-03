import {takeLatest, call, put} from "redux-saga/effects";
import delay from '@redux-saga/delay-p'
import "isomorphic-fetch";

// API URL
const url = 'https://react-assessment-api.herokuapp.com/api/drone';

// redux saga watch changing

export function * watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// Get long, lat from drone
function getCordion() {}

function * workerSaga() {
    // Fetch new data every 4 seconds to get new data

}

export default[workerSaga];
