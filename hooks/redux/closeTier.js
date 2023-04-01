import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

export const closeTier = createSlice({
    name: "close",
    initialState: {
        isClosed : false,
    },
    reducers: {
        setClose: (state) => {
            state.isClosed = true;
        },

        setOpen: (state) => {
            state.isClosed = false
        }
    }
})

export const {setClose, setOpen } = closeTier.actions;
export default closeTier.reducer;