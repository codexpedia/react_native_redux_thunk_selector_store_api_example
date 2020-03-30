import { combineReducers } from 'redux';
import { account } from './accountReducer';
import { availableApi } from './availableApiReducer';

const rootReducer = combineReducers({
  account,
  availableApi,
});

export default rootReducer;
