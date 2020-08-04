import { createAction } from '@reduxjs/toolkit';
import { ADD_ITEM, DELETE_ITEM, MARK_ITEM ,FETCH_ITEM} from '../actions/actionType';

export const addItemAction = createAction(ADD_ITEM, (inputText,done,id) => ({ payload: { inputText:inputText,done:done ,id:id} }));
export const deleteItemAction = createAction(DELETE_ITEM, (index) => ({ payload: { index } }));
export const markItemAction = createAction(MARK_ITEM, (index) => ({ payload: { index } }));