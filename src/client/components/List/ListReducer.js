import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../../types/types';
import uuid from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'Item 1' },
        { id: uuid(), name: 'Item 2' },
        { id: uuid(), name: 'Item 3' },
        { id: uuid(), name: 'Item 4' }
    ]
};

export default (state = initialState, action) => {
    switch(action.types) {
        case GET_ITEMS:
        return {
            ...state
        }
        case ADD_ITEM:
        return {
            ...state
        }
        case UPDATE_ITEM:
        return {
            ...state
        }
        case DELETE_ITEM:
        return {
            ...state
        }
        default:
        return state;
    }
}