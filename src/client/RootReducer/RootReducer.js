import { combineReducers } from 'redux';
import ListReducer from '../components/List/ListReducer';

export default combineReducers({
    list: ListReducer
})