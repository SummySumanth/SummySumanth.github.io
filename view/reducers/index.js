import { combineReducers } from 'redux';

import appSettings from './appSettings';

const allReducers = combineReducers({
    appSettings : appSettings
});

export default allReducers;