import * as actions from "../actions";

const initialState = {
    loading: true,
    timestamp: "",
    latitude: "",
    longitude: "",
    fulldata: [],
    viewport: {
        width: '',
        height: '',
        zoom: 4,
        latitude: 29.7604 ,
        longitude: -95.3698,
    }
};

export function droneDataRecevied(state = initialState, action) {
    //droneData from workerSaga
    const {droneData, viewport} = action;
    console.log("ACTION!", action)

    //get the latest 15 data for the chart component.
    const full = droneData.slice(droneData.length - 15);
    
    //console.log('full', droneData) get the latest value
    const {latitude, longitude, timestamp} = droneData[droneData.length - 1];

    //get the second last timestamp
    const timestamp2 = droneData[droneData.length - 2].timestamp;

    // check data seconds before the last one
    const seconds = (timestamp - timestamp2) / 1000;

    // Handle All action type
    switch (action.type) {
        case "API_CALL_REQUEST":
            return {
                ...state,
                error: null
            };
        case "API_CALL_SUCCESS":
            return {
                ...state,
                loading: false,
                timestamp: timestamp,
                latitude: latitude,
                longitude: -95.3698,
                seconds: seconds,
                fulldata: full,
                viewport: {
                    width: 500,
                    height: 400,
                    latitude: latitude,
                    longitude: longitude,
                
                }
            };

        case "VIEW_UPDATE_UPDATE":
            return {
                ...state,
                viewport: viewport
            };
        case "API_CALL_FAILURE":
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}

const handlers = {
    [actions.FETCH_DRONE]: droneDataRecevied,
    [actions.DRONE_DATA_RECEIVED]: droneDataRecevied
};

export default(state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") 
        return state;
    return handler(state, action);
};