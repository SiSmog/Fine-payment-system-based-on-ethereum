import {createSlice} from "@reduxjs/toolkit"

const historySlice= createSlice({
    name:"history",
    initialState:{data:[]},
    reducers:{
        setHistory: (state,value)=>{state.data=value.payload},
    }
})
export const {setHistory}=historySlice.actions

export default historySlice.reducer