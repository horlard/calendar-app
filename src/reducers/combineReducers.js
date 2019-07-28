import {combineReducers} from 'redux';
import {reducer as form } from 'redux-form';

import CreateEvent from './createEventReducer';

export default combineReducers({
    CreateEvent,
    form 
})