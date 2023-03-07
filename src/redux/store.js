import {legacy_createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import {postsReducer} from './reducers/post';
import {storiesReducer} from './reducers/story';
import {likesReducer} from './reducers/like';
import {commentsReducer} from './reducers/comment';
import {userFriendsReducer} from './reducers/user';
import Raven from 'raven-js';
const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }
const reducer = combineReducers({
  userFriends:userFriendsReducer,
    posts:postsReducer,
    comments:commentsReducer,
    likes:likesReducer,
    stories:storiesReducer
});
const middleware = [thunk];
export const store = legacy_createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware ,crashReporter))
)