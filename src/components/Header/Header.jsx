import React from "react";
import './header.css';
import logo from './../../assets/zs4.png';

const Header = () =>{

    return(
        <header className="header">
        <img src={logo} id="logo"></img>
        <h1>Aplikacja Biblioteki Szkolnej</h1>
          <nav>
            <a href='#aboutUs'>Strona główna</a>
            <a href='#Books'>Baza Lektur</a>
            <a href='#Contact'>Kontakt</a>
          </nav>
        </header>
    );
};

export default Header;
