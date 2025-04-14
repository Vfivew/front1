import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './login';

const authFlowReducer = combineReducers({
  login: loginSlice,
});

export default authFlowReducer;
