import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2><Link to="/campus">🎓 Campuses 🎓</Link></h2>
            <h2><Link to="/students">🐶 Students 🐶</Link></h2>
        </nav>
    )
}

export default Navbar;