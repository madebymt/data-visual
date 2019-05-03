import * as actions from "../actions";

const initialState = {
    chartData: []
};

export function chartDataReceived(state = initialState, action) {
    //droneData from workerSaga
    const {chartData} = action;

    // Handle All action type
    switch (action.type) {
        case "CHART_DATA_RECEIVED":
            return {
                ...state,
                chartData
            };

        default:
            return state;
    }
}

const handlers = {
    [actions.CHART_DATA_RECEIVED]: chartDataReceived,
};

export default(state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") 
        return state;
    return handler(state, action);
};