import {combineReducers} from 'redux';
import {reducer as form } from 'redux-form';

import CreateEvent from './createEvent';

export default combineReducers({
    CreateEvent,
    form
})