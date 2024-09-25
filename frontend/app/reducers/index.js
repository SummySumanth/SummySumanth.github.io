import { combineReducers } from 'redux';

import appSettings from './appSettings';

const allReducers = combineReducers({
  appSettings,
});

export default allReducers;
