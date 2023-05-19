import React, { useEffect, useState } from "react";
import { fetchOneStudentAsync, selectStudent, editStudentAsync } from './SingleStudentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditStudent from "./EditStudent";

const SingleStudent = () => {
    let student = useSelector(selectStudent);
    let id = useParams().id;
    const dispatch = useDispatch();
    const [edited, setEdited] = useState(false); 
    
    useEffect(() => {
        dispatch(fetchOneStudentAsync(id));
        setEdited(false);
    }, [dispatch, edited]);

    const handleEdit = async({studentId, firstName, lastName, email, gpa}) => {
        await dispatch(editStudentAsync({studentId, firstName, lastName, email, gpa}));
        setEdited(true);
    }

    return (
        <>
            {student==="pending"? <p>Loading student now...</p>:
            <div>
                {student.id?
                    <div className="column">
                        <h3>Name: {student.firstName}  {student.lastName}</h3>
                        <img className="dogPic" src={student.imageUrl}/>
                        <h4>GPA: {student.gpa}</h4>
                        <h4>Email: {student.email}</h4>
                        <h4>Campus: {student.Campus? 
                            <Link to={`/campus/${student.Campus.id}`}>🎓 {student.Campus.name} 🎓</Link>: 'No campus'}
                        </h4>
                    </div>
                : <p>Student not found!</p>}
                <EditStudent student={student} handleEdit={handleEdit} />
            </div>}
        </>
    )
}

export default SingleStudent;