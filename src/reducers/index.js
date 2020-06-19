import {combineReducers} from 'redux';
import {AddedFeature} from './AddedFeature';
import {AdditionalFeature} from './AdditionalFeature';

export const rootReducer = combineReducers({
    AddedFeature,
    AdditionalFeature
});