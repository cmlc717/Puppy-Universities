import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentAsync } from './StudentsSlice';

const AddStudent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [campus, setCampus] = useState("");
    const [address, setAddress] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validateForm();
        if (valid === true) {
            dispatch(addStudentAsync( {firstName, lastName, email, campus, address}));
            setFirstName("");
            setLastName("");
            setEmail("");
            setCampus("");
            setAddress("");
        } else {
            alert("Form must have all required fields!")
        }

    }

    const validateForm = () => {
        let valid = true;

        if (typeof firstName != "string" || firstName.length === 0 || firstName === undefined) {
            valid = false;
        }

        if (typeof lastName != "string" || lastName.length === 0 || lastName === undefined) {
            valid = false;
        }

        if (!email.includes("@") || !email.includes(".") || typeof email != "string" || email.length === 0 || email === undefined) {
            valid = false;
        }

        return valid;
    }

    return (
        <div className='column' id="formBox">
            <h2>🐶 Add a Student 🐶</h2>
            <form onSubmit={handleSubmit} className='column' id="form">
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                
                <label htmlFor="email">Email: </label>
                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <label htmlFor="campus">Campus: </label>
                <input name="campus" value={campus} onChange={(e) => setCampus(e.target.value)}/>

                <label htmlFor="address">Address: </label>
                <input name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent;