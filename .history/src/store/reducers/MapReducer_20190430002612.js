import * as actions from "../actions";

const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZW" +
        "IvBpdetSk-sw";

const initialState = {
    viewport: {
        width: '',
        height: '',
        latitude: '',
        longitude: '',
        zoom: '',
        token: TOKEN
    }
};

export function MapReceived(state = initialState, action) {
    console.log("almost!")
    // Handle All action type
    switch (action.type) {
        case "MAP_CALL_SUCCESS":
            return {
                ...state,
                viewport: {
                    width: 500,
                    height: 500,
                    longitude: -95.3698, 
                    latitude: 29.7604,
                    zoom: 8,
                    token: TOKEN
                }
            };
        case "MAP_CALL_FAILURE":
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}

const handlers = {
    [actions.MAP_CALL_SUCCESS]: MapReceived,
    [actions.MAP_CALL_FAILURE]: MapReceived
};

export default(state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") 
        return state;
    return handler(state, action);
};