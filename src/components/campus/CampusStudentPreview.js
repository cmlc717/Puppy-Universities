
import React from 'react';
import { Link } from "react-router-dom";

const CampusStudentPreview = (props) => {
    const { id, student, handleRemoveStudent } = props;
    const studentId = student.id;

    return (
        <div className="row">
            <li>
                <Link to={`/students/${studentId}`} key={studentId}>
                    🐶 {student.firstName + " " + student.lastName} 🐶
                </Link>
            </li>
            <button onClick={() => handleRemoveStudent({id, studentId})}>Unregister</button>
        </div>
    )
}

export default CampusStudentPreview;