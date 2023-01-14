import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState = {value: {username: ""}}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state = initialState
        },

    }
});



export const store = configureStore({
    
});