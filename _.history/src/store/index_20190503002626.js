import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import droneReducer from './reducers/Drone';
import chartReducer from './reducers/Chart';

export default() => {
  const rootReducer = combineReducers({weather: weatherReducer, drone: droneReducer, chart: chartReducer});

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  //apply saga middleware in each file in saga folder
  sagas.forEach(sagaMiddleware.run);

  return store;
};
