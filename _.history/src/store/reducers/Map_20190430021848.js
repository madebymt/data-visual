import * as actions from "../actions";

// should store api key in env, but this test assigment, so I put in here for now. 
const TOKEN = "API_KEY GOES HERE";

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