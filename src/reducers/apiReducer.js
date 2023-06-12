import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    data :{},
    loader: false ,
    error: ''
};

export const apiCall = () => {
    return dispatch => {
        dispatch(apiCallStart());
        fetch('https://jsonplaceholder.typicode.com/posts')
        
        .then(res => res.json())
        .then(response => {
            dispatch(apiSuccess(response))
            console.log(response)
        })
        .catch(err => {
            dispatch(apiFailure(err))
            console.log(err)
        });
    };
};
export const apiReducer = createSlice({
    name :'apiReducer',
    initialState,
    reducers:{
        apiCallStart :(state)=>{
            state.loader = true
        },
        apiSuccess :(state, action) => {
            state.loader = false;
            state.data = action.payload
        },
        apiFailure :(state,action) => {
            state.loader = false;
            state.err = action.payload
        },
    }
})
export const {apiCallStart,apiSuccess,apiFailure} = apiReducer.actions;
export default apiReducer.reducer;

