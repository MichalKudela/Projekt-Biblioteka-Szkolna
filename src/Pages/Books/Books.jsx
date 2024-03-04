import React from "react";
import { Link } from 'react-router-dom';
import './Books.css'; 
import booksData from '../../data/books.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/Aboutus/AboutUs";



const Books = () =>{
    return(
      <>
        <Header />
        <AboutUs />
        <div id='Books'>
          {booksData.map((book) => (
            <Link to={`/details/${book.id}`} key={book.id} className="book-box" title={book.title}>
                    <b>{book.title}</b>
                    <br/>
                    {book.author}
                    <img src={`/BooksPictures/${book.id}.png`} alt={book.title} />
                    
            </Link>
          ))}
          
        </div>
        <Footer />
    </>
    );
};

export default Books;