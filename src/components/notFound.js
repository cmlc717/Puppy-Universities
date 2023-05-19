import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div id="notFound">
            <h1><span>ERROR 404</span></h1>
            <h1>🐶 That's RUFF, that page doesn't exist! 🐶</h1>
            <h2><Link to='/'>Go back to home</Link></h2>
        </div>
    )
}

export default NotFound;