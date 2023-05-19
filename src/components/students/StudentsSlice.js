import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudentsAsync = createAsyncThunk("Students/getAll", async() => {
    try {
        const {data} = await axios.get('api/students');
        return data;  
    } catch (err) {
        console.error(err);
    }
});

export const addStudentAsync = createAsyncThunk("Studets/addStudent", async({firstName, lastName, email, campus, address}) => {
    try {
        const {data} = await axios.post('api/students', {firstName, lastName, email, campus, address});
        return data;
    } catch (err) {
        console.err(err);
    }
});

export const studentsSlice = createSlice({
    name: "Students",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchStudentsAsync.pending, (state, action) => {
            return "pending";
        });
        builder.addCase(addStudentAsync.fulfilled, (state, action) => {
           state.push(action.payload);
        });
    }
});

export const selectStudents = (state) => {
    return state.Students;
}

export default studentsSlice.reducer;