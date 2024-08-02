import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:[],
    loadingUser:false

}


export const loadUsers = createAsyncThunk(
    "load/user/start",
    async ()=>{
        const response = await         fetch("https://jsonplaceholder.typicode.com/users")
        return response.json()
    }
)




export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(loadUsers.pending, (state, action) => {
                state.loadUser = true;
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.loadingUser = false
                state.users = action.payload

            })
    }
})


export default userSlice.reducer