import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "booksManager",
    initialState: {
        auth: false,
        personTake: []
    },
    reducers: {
        personTakeAction(state, action) {
            state.personTake.push(action.payload)
        },
        personReturnAction(state, action) {
            state.personTake = state.personTake.filter(a => action.payload != a);
        },
        authSwitch(state) {
            state.auth = !state.auth;
        }

    }
})

export default toolkitSlice.reducer
export const {personTakeAction, personReturnAction, authSwitch} = toolkitSlice.actions