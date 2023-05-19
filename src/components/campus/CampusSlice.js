import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCampusAsync = createAsyncThunk("Campuses/getAll", async() => {
    try {
        const {data} = await axios.get('api/campus');
        return data;
    } catch (err) {
        console.err(err);
    }

});

export const addCampusAsync = createAsyncThunk("Campuses/addCampus", async({name, address, description}) => {
    try {
        const {data} = await axios.post('api/campus', {name, address, description});
        return data;
    } catch (err) {
        console.err(err);
    }
});

export const campusSlice = createSlice({
    name: "Campuses",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchCampusAsync.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(addCampusAsync.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    }
});

export const selectCampuses = (state) => {
    return state.Campuses;
}

export default campusSlice.reducer;