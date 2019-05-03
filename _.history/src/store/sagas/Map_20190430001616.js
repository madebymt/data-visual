import {takeLatest, put} from "redux-saga/effects";

// redux saga watch changing
export function * watcherSaga() {
    yield takeLatest("MAP_CALL_SUCCESS", workerSaga);
}


function MapStuff() {
    return "nothing"
}

function * workerSaga() {
    try {
        console.log("map saga");
        var obj = {};
        yield put({type: "MAP_CALL_SUCCESS", nothing});
    } catch (error) {
        console.log(error);

        yield put({type: "MAP_CALL_FAILURE", error});
    }
}

export default[workerSaga];
