import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOneStudentAsync = createAsyncThunk("Student/getOne", async(id) => {
    try {
        const {data} = await axios.get(`/api/students/${id}`);
        return data;
    } catch (err) {
        console.error(err);
    }
});

export const deleteStudentAsync = createAsyncThunk("Student/deleteOne", async(id) => {
    try {
        await axios.delete(`/api/students/${id}`);
    } catch (err) {
        console.error(err);
    }
});

export const editStudentAsync = createAsyncThunk("Student/editOne", async({studentId, firstName, lastName, email, gpa}) => {
    try {
        await axios.put(`/api/students/${studentId}`, {firstName, lastName, email, gpa});
    } catch (err) {
        console.error(err);
    }
});

export const singleStudentSlice = createSlice({
    name: "Students",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchOneStudentAsync.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(editStudentAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectStudent = (state) => {
    return state.SingleStudent;
}

export default singleStudentSlice.reducer;