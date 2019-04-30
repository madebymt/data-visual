import {takeLatest, call, put} from "redux-saga/effects";
//import delay from '@redux-saga/delay-p'
import "isomorphic-fetch";

const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZW" +
        "IvBpdetSk-sw";
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
