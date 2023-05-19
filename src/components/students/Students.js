import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudentsAsync, selectStudents } from './StudentsSlice'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AddStudent from './AddStudent';
import SingleStudentPreview from './SingleStudentPreview';
import { deleteStudentAsync } from './SingleStudentSlice';

const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector(selectStudents);
    const [deleted, setDeleted] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [arrCopy, setArrCopy] = useState([]);  

    useEffect(() => {
        dispatch(fetchStudentsAsync());
        setDeleted(false);
    }, [dispatch, deleted, arrCopy]);

    const handleDelete = async(id) => {
        await dispatch(deleteStudentAsync(id));
        setDeleted(true);
    }

    function sortHelper(sorter) {
        setSorted(true);
        const studentsCopy = [...students];
        if (sorter === "LN") {
            studentsCopy.sort((a, b) => a.lastName.localeCompare(b.lastName));
            setArrCopy(studentsCopy);
        } else if (sorter === "GPA") {
            studentsCopy.sort((a, b) => b.gpa - a.gpa);
            setArrCopy(studentsCopy);
        } else if (sorter === "NR") {
            let newCopy = studentsCopy.filter((student) => !student.Campus)
            setArrCopy(newCopy);
        }
    }

    return (
        <div className ='center'>
            <div className='sortBar'>
                <h3>Sort</h3>
                <button onClick={() => sortHelper("LN")}>Sort by last name</button>
                <button onClick={() => sortHelper("GPA")}>Sort by GPA</button>
                <button onClick={() => sortHelper("NR")}>Filter only not-registered students</button>
            </div>
            <div>
                {students==="pending"? <p>Loading students now...</p>:
                    <div className='column'>
                        {sorted? arrCopy.map(student => <SingleStudentPreview key={uuidv4()} student={student} handleDelete={handleDelete}/>):
                        students.map(student => <SingleStudentPreview key={uuidv4()} student={student} handleDelete={handleDelete}/>)}
                    </div>
                }
                <AddStudent />
            </div>
        </div>
    )
}

export default Students;