import React, { useState } from 'react';

const EditStudent = (props) => {
    const { student, handleEdit } = props;

    const studentId = student.id;
    const [firstName, setFirstName] = useState(student.firstName);
    const [lastName, setLastName] = useState(student.lastName);
    const [email, setEmail] = useState(student.email);
    const [gpa, setGpa] = useState(student.gpa);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit({studentId, firstName, lastName, email, gpa});
    }

    return (
        <div className="column" id="formBox">
            <h2>🐶 Edit a Student 🐶</h2>
            <form onSubmit={handleSubmit} id="form">
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)}/>
                
                <label htmlFor="email">Email: </label>
                <input name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <label htmlFor="gpa">GPA: </label>
                <input name="gpa" defaultValue={gpa} onChange={(e) => setGpa(e.target.value)}/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditStudent;