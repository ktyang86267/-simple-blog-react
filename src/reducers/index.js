import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReducerPosts from './reducer_post';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: formReducer
});

export default rootReducer;
