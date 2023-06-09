import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    number:0,
    changeValue:'1',
    changeTheme: false
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
        },
        changeTheme: (state = true ,action)=>{
            state.changeTheme = action.payload
        }    
    }
})
export const {increment,decrement,changeValue,changeTheme}=counterReducer.actions;
export default counterReducer.reducer;