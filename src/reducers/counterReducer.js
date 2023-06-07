import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    number:0,
    changeValue:'1'
}

const counterReducer = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.number += parseInt(state.changeValue);
        },
        decrement: (state)=>{
            state.number -= parseInt(state.changeValue);
        },
        changeValue: (state,action)=>{
            state.changeValue = action.payload
        }
    }
})
export const {increment,decrement,changeValue}=counterReducer.actions;
export default counterReducer.reducer;