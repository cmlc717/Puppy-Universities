import React, { useEffect, useState } from "react";
import { fetchOneCampusAsync, selectCampus, removeStudentAsync, editCampusAsync } from './SingleCampusSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import CampusStudentPreview from "./CampusStudentPreview";
import { v4 as uuidv4 } from 'uuid';
import EditCampus from './EditCampus';

const SingleCampus = () => {
    const dispatch = useDispatch();
    const [edited, setEdited] = useState(false);
    const [removed, setRemoved] = useState(false);
    let campus = useSelector(selectCampus);
    let id = useParams().id;

    useEffect(() => {
        dispatch(fetchOneCampusAsync(id));
        setEdited(false);
        setRemoved(false);
    }, [dispatch, edited, removed]);

    const handleRemoveStudent = ({id, studentId}) => {
        dispatch(removeStudentAsync({id, studentId}));
        setRemoved(true);
    }

    const handleEdit = async({id, name, address, description}) => {
        await dispatch(editCampusAsync({id, name, address, description}));
        setEdited(true);
    }

    return (
        <div>
            {campus==="pending"? <p>Loading campus now...</p>:
                <div>
                    {campus.id?
                        <div className="column">
                            <h3>Name: {campus.name}</h3>
                            <img className="campusPic" src={campus.imageUrl}/>
                            <h4>Address: {campus.address}</h4>
                            <h4>Description: {campus.description}</h4>
                            <h4>Students:</h4>
                            <ul>
                                {campus.Students && campus.Students.length > 0? campus.Students.map((student) => <CampusStudentPreview key={uuidv4()} id={campus.id} student={student} handleRemoveStudent={handleRemoveStudent}/>): <li>No Students</li> }
                            </ul>
                        </div>
                    : <p>Campus not found!</p>}
                    <EditCampus campus={campus} handleEdit={handleEdit} />
                </div>
            }
        </div>
    )
}

export default SingleCampus;