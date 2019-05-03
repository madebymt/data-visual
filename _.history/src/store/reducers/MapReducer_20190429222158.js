import * as actions from "../actions";

const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZW" +
        "IvBpdetSk-sw";

const setState = {
    viewport: {
        width: '',
        height: '',
        latitude: '',
        longitude: '',
        zoom: 8,
        token: TOKEN
    }
};

export function MapRecevied(state = setState, action) {
    const {mapData} = action;

    // Handle All action type
    switch (action.type) {
        case "MAP_CALL_REQUEST":
            return {
                ...state,
                error: null
            };
        case "MAP_CALL_SUCCESS":
            return {
                viewport: {
                    width: '',
                    height: '',
                    latitude: '',
                    longitude: '',
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
    [actions.MAP_CALL_REQUEST]: MapRecevied
};

export default(state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") 
        return state;
    return handler(state, action);
};