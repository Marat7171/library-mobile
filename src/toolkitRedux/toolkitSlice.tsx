import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "booksManager",
    initialState: {
        auth: false,
        booksSwitch: false,
    },
    reducers: {
        booksSwitchAction(state) {
            state.booksSwitch = !state.booksSwitch;
        },
        authSwitch(state) {
            state.auth = !state.auth;
        }

    }
})

export default toolkitSlice.reducer
export const {booksSwitchAction, authSwitch} = toolkitSlice.actions