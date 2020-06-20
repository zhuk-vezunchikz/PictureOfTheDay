import { applyMiddleware, combineReducers, createStore } from 'redux';
import pictureReducer from '../../components/picture/reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  pictureState: pictureReducer,
});
export default function configureStore(preloadedState) {
  return createStore(reducers, preloadedState, applyMiddleware(thunk));
}
