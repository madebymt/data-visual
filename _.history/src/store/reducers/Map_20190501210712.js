import * as actions from "../actions";
// "API_KEY_GOES_HERE";

// Sned Stacy the API Key for this section
const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZWIvBpdetSk-sw"


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

    // Handle All action type
    switch (action.type) {
        case "MAP_CALL_SUCCESS":
            return {
                ...state,
                viewport: {
                    width: 500,
                    height: 400,
                    zoom: 4,
                    token: TOKEN
                }
            };
        case "MAP_VIEW_CHANGE":
        return {
            ...state,
            viewport: {
                width: 500,
                height: 400,
                latitude,
                longitude,
                zoom
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
    [actions.MAP_CALL_FAILURE]: MapReceived,
    [actions.MAP_VIEW_CHANGE]: MapReceived
};

export default(state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") 
        return state;
    return handler(state, action);
};