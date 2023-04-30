import {configureStore} from "@reduxjs/toolkit"
import { stateValues } from "./reducer"

export const store = configureStore({
  reducer : {
    items : stateValues.reducer
  } 
})

