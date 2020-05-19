import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  showwcase: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>
