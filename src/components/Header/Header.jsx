import React from "react";
import './header.css';
import logo from './../../assets/zs4.png';
import { Link } from "react-router-dom";

const Header = () =>{

    return(
        <header className="header">
        <img src={logo} id="logo"></img>
        <h1>Aplikacja Biblioteki Szkolnej</h1>
          <nav>
            <Link to='/books'>Strona główna</Link>
          </nav>
        </header>
    );
};

export default Header;
