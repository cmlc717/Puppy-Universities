import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOneCampusAsync = createAsyncThunk("OneCampus/getOne", async(id) => {
    try {
        const {data} = await axios.get(`/api/campus/${id}`);
        return data;    
    } catch (err) {
        console.error(err);
    }
});

export const deleteCampusAsync = createAsyncThunk("OneCampus/deleteOne", async(id) => {
    try {
        await axios.delete(`/api/campus/${id}`);
    } catch (err) {
        console.error(err);
    }
});

export const editCampusAsync = createAsyncThunk("OneCampus/editOne", async({id, name, address, description }) => {
    try {
        await axios.put(`/api/campus/${id}`, {name, address, description});
    } catch (err) {
        console.error(err);
    }
});

export const removeStudentAsync = createAsyncThunk("OneCampus/removeStudent", async({id, studentId}) => {
    try {
        const { data } = await axios.get(`/api/campus/removeStudent/${id}/${studentId}`);
        return data;
    } catch (err) {
        console.error(err);
    }
});

export const singleCampusSlice = createSlice({
    name: "SingleCampus",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchOneCampusAsync.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(editCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(removeStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectCampus = (state) => {
    return state.SingleCampus;
}

export default singleCampusSlice.reducer;