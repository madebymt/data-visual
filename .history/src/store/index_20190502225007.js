import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import droneReducer from './reducers/Drone';
i//mport mapReducer from './reducers/Map';

export default() => {
  const rootReducer = combineReducers({weather: weatherReducer, drone: droneReducer, map: mapReducer});

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  //apply saga middleware in each file in saga folder
  sagas.forEach(sagaMiddleware.run);

  return store;
};
