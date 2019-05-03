import {takeLatest, put} from "redux-saga/effects";

// redux saga watch changing
export function * watcherSaga() {
    yield takeLatest("MAP_CALL_REQUEST", workerSaga);
}

function * workerSaga() {
    try {
        console.log("map saga");
        yield put({type: "MAP_CALL_SUCCESS", "success"});
    } catch (error) {
        console.log(error);

        yield put({type: "MAP_CALL_FAILURE", error});
    }
}

export default[workerSaga];
