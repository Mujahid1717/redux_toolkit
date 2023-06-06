import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    number:0,
}

const counterReducer = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.number +=1;
        },
        decrement: (state)=>{
            state.number -=1;
        }
    }
})
export const {increment,decrement}=counterReducer.actions;
export default counterReducer.reducer;