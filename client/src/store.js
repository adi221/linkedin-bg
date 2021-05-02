import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from './reducers/productReducer';
import { alertReducer } from './reducers/alertReducer';
import { uploadReducer } from './reducers/uploadReducer';

const rootReducer = combineReducers({
  product: productReducer,
  alert: alertReducer,
  upload: uploadReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

console.log(store.getState());

export default store;
