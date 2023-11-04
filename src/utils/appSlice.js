import { createSlice } from "@reduxjs/toolkit";

// created slice and imported it in store
const appSlice = createSlice({
    name : "app",
    initialState:{
        isMenuOpen:true,

    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        },
    },

})


export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;