import {takeLatest, call, put} from "redux-saga/effects";

// redux saga watch changing
export function * watcherSaga() {
    yield takeLatest("MAP_CALL_REQUEST", workerSaga);
}

function * workerSaga() {
    try {
        yield put({type: "MAP_CALL_SUCCESS", getCordion});
    } catch (error) {
        yield put({type: "MAP_CALL_FAILURE", error});
    }
}

export default[workerSaga];
