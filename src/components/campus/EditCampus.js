import React, { useState } from 'react';
import { Link } from "react-router-dom";

const EditCampus = (props) => {
    const { campus, handleEdit } = props;
    const [name, setName] = useState(campus.name);
    const [address, setAddress] = useState(campus.address);
    const [description, setDescription] = useState(campus.description);
    const id = campus.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit({id, name, address, description});
        setName("");
        setAddress("");
        setDescription("");
    }

    return (
        <div className="column" id="formBox">
            <h3>🎓 Edit Campus 🎓</h3>
            <form onSubmit={handleSubmit} id="form">
                <label htmlFor="name">Name: </label>
                <input name="name" defaultValue={campus.name} onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="address">Address: </label>
                <input name="address" defaultValue={campus.address} onChange={(e) => setAddress(e.target.value)}/>
                
                <label htmlFor="description">Description: </label>
                <textarea name="description" defaultValue={campus.description} onChange={(e) => setDescription(e.target.value)}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditCampus;