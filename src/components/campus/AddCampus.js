import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCampusAsync } from './CampusSlice';

const AddCampus = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validateForm();
        if (valid) {
            dispatch(addCampusAsync({name, address, description}));
            setName("");
            setAddress("");
            setDescription("");
        } else {
            alert("Form must have all required fields!")
        }
    }

    const validateForm = () => {
        let valid = true;

        if (typeof name != "string" || name.length === 0 || name === undefined) {
            valid = false;
        }

        if (typeof address != "string" || address.length === 0 || address === undefined) {
            valid = false;
        }

        return valid;
    }

    return (
        <div className='column' id="formBox">
            <h2>🎓 Add a Campus 🎓</h2>
            <form onSubmit={handleSubmit} className='column' id="form">
                <label htmlFor="name">Name: </label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="address">Address: </label>
                <input name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                
                <label htmlFor="description">Description: </label>
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCampus;