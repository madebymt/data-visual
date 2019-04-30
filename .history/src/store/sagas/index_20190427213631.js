import WeatherSagas from "./Weather";
import DroneSagas from './Drone'
import ApiErrors from "./ApiErrors";

// watch saga -> action -> worker saga
export default[...ApiErrors,
    ...WeatherSagas,
    ...DroneSagas];
