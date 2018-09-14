import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../../types/types';

// Action generators
export const getItems = () => {
    type: GET_ITEMS
}

export const addItem = () => {
    type: ADD_ITEM
}

export const updateItem = () => {
    type: UPDATE_ITEM
}

export const deleteItem = () => {
    type: DELETE_ITEM
}