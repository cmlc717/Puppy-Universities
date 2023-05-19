import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const SingleStudentPreview = (props) => {
    const {student, handleDelete} = props;

    return (
        <div className="column">
            <div className="row">
                <h3> 
                    <Link to={`/students/${student.id}`}>
                        🐶 {student.firstName}  {student.lastName} 🐶
                    </Link>
                </h3>
                <button onClick={() => handleDelete(student.id)}>X</button>
            </div>                
            <img className="dogPic" src={student.imageUrl} />
        </div>
    )
}

export default SingleStudentPreview;