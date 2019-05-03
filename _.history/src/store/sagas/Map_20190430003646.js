import {takeLatest, put} from "redux-saga/effects";

// // redux saga watch changing
// export function * watcherSaga() {
//     console.log("watcher saga")
//     yield takeLatest("MAP_CALL_SUCCESS", workerSaga);
// }

function * workerSaga() {
    try {
        console.log("worker saga")
        yield put({type: "MAP_CALL_FAILURE", id: 1});
    } catch (error) {
        console.log(error);

        yield put({type: "MAP_CALL_FAILURE", error});
    }
}

export default[workerSaga];
