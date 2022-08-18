import reactFormReducer from './reducers/reactFormReducer';
const { combineReducers, createStore } = require('redux');

const rootReducer = combineReducers({
  reactFormReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
