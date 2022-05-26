import { combineReducers } from 'redux';

import appSlice from '../AppSlice';

const rootReducer = combineReducers({
  app: appSlice,
})

export default rootReducer;