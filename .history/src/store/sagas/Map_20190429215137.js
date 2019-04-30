import {takeLatest, call, put} from "redux-saga/effects";
//import delay from '@redux-saga/delay-p'
import "isomorphic-fetch";

// API URL
const url = 'https://react-assessment-api.herokuapp.com/api/drone';

// redux saga watch changing

export function * watcherSaga() {
    yield takeLatest("MAP_CALL_REQUEST", workerSaga);
}

// Get long, lat from drone
function getCordion() {}

function * workerSaga() {
    try {
        yield put({type: "MAP_CALL_SUCCESS", getCordion});
    } catch (error) {
        yield put({type: "MAP_CALL_FAILURE", error});
    }

}

export default[workerSaga];
