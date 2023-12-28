import React from "react";
import { Link } from "react-router-dom";

// Define a imagem com o logo do site
const Logo = () => {
    return (
        <Link to="/">
            <h1 className="logo">
                <span>Editora MaujorTec</span>
            </h1>
        </Link>
    );
};

export default Logo;