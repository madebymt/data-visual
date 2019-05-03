import {takeLatest, put} from "redux-saga/effects";

function * workerSaga() {
    try {
        yield put({type: "MAP_CALL_SUCCESS", id: 1});
    } catch (error) {
        console.log(error);
        yield put({type: "MAP_CALL_FAILURE", error});
    }
}

export default[workerSaga];
