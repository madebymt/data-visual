import WeatherSagas from "./Weather";
import DroneSagas from './Drone'
import MapSagas from './Map'
import ApiErrors from "./ApiErrors";

// watch saga -> action -> worker saga
export default [
    ...ApiErrors,
    ...WeatherSagas,
    ...DroneSagas,
    ...MapSagas
    ];
