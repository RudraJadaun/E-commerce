import { createSlice } from "@reduxjs/toolkit";

//to check if userinfo is in local storage else null
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    }
});
export const { setCredentials } = authSlice.actions;
export const { logout } = authSlice.actions;
export default authSlice.reducer;