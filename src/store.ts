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

//remember that the "actions" here are basically the reducers within the slice

export const {login, logout} = userSlice.actions;


export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});