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
    },

})


export const {toggleMenu} = appSlice.actions;
export default appSlice.reducer;