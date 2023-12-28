import React from "react";
import { NavLink } from "react-router-dom";

// Define o menu de navegação
const Navegacao = () => {
    return (
        <ul>
            <li><NavLink style={({isActive}) => isActive ? {color: "#027399"} : undefined} to="/">Home</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? {color: "#027399"} : undefined} to="/frontend">Frontend</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? {color: "#027399"} : undefined} to="/programacao">Programação</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? {color: "#027399"} : undefined} to="/design">Design</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? {color: "#027399"} : undefined} to="/catalogo">Catálogo</NavLink></li>
        </ul>
    );
};

export default Navegacao;