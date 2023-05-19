import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const SingleCampusPreview = (props) => {
    const {campus, handleDelete } = props;

    return (
        <div className="column">
            <div className="row">
                <h3>
                    <Link to={`/campus/${campus.id}`}>
                        🎓 {campus.name} 🎓
                    </Link>
                </h3>
                <button onClick={() => handleDelete(campus.id)}>X</button>
            </div>
            <img className="campusPic" src={campus.imageUrl}/>
        </div>
    )
}

export default SingleCampusPreview;