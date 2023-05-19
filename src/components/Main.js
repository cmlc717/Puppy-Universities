import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Campus from './campus/Campus';
import Students from './students/Students';
import Navbar from './navbar';
import SingleCampus from './campus/SingleCampus';
import SingleStudent from './students/SingleStudent';
import AddCampus from './campus/AddCampus';
import AddStudent from './students/AddStudent';
import EditCampus from './campus/EditCampus';
import Home from './home';
import NotFound from './notFound';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/campus" element={<Campus />}/>
                <Route path="/campus/:id" element={<SingleCampus />}/>
                <Route path="/students" element={<Students />}/>
                <Route path="/students/:id" element={<SingleStudent />}/>
                <Route path="/campus/addcampus" element={<AddCampus />}/>
                <Route path="/students/addstudents" element={<AddStudent />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>  
        </div>
    );
};

export default Main;