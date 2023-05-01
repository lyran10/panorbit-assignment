import {createSlice,PayloadAction} from "@reduxjs/toolkit"

// state
const initialState  = {
  menuItem : "profile"
}

export const stateValues = createSlice({
  name : "State",
  initialState,
  reducers : {
    // change the menu item in the state
    menuItem : (state,action) => {
        state.menuItem = action.payload
    }
 },   
})

export const {menuItem} = stateValues.actions

