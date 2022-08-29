import reactFormReducer from './reducers/reactFormReducer';
import DatVeReducer from './reducers/DatVeReducer';
const { combineReducers, createStore } = require('redux');

const rootReducer = combineReducers({
  reactFormReducer,
  DatVeReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
