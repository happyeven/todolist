import { ADD_ITEM, DELETE_ITEM } from '../actions/actionType';
import { createReducer } from '@reduxjs/toolkit';

const initState = {
    texts: []
}

export default createReducer(initState, {
    [ADD_ITEM]: (state, action) => { return { texts: state.texts.concat(action.payload.inputText) } },
    [DELETE_ITEM]: (state,action) => ({texts : state.texts.filter((item,index)=>index !== action.payload.index)})
})