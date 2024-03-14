import { createSlice, createSelector } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
const initialState = localStorage.getItem("cart") ? JSON.parse
    (localStorage.getItem("cart")) : { cartItems: [], shippingAddress: {}, paymentMethod: 'Stripe' };


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            }
            else {
                state.cartItems = [...state.cartItems, item];
            }
            return updateCart(state)
        },


        // export const selectCartItems = createSelector(
        //     (state) => state.cart.cartItems,
        //     (cartItems) => {
        //         // Add any necessary validation or transformation logic here
        //         if (!Array.isArray(cartItems)) {
        //             // If cartItems is not an array, return an empty array
        //             return [];
        //         },
        // return cartItems;
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

            return updateCart(state);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;

            return updateCart(state);
        }

    },
});
export const { addToCart, removeFromCart, saveShippingAddress } = cartSlice.actions;

export default cartSlice.reducer;
