import {legacy_createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import {postsReducer} from './reducers/post';
const reducer = combineReducers({
    posts:postsReducer,
});
const middleware = [thunk];
export const store = legacy_createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)