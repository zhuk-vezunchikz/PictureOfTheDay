import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import mainReducer from '../../components/main/reducer/main.reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  mainState: mainReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(thunk)));
}
