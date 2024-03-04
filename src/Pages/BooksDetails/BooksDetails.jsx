import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import booksData from '../../data/books.json';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import './booksdetails.css';

const Details = () => {



    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        
        const bookDetails = booksData.find(book => book.id.toString() === bookId);
        setBook(bookDetails);
    }, [bookId]);

    if (!book) return <div>Loading...</div>;

    return(
        <>
            <Header />
            <div className="details">
                <div className="book">
                    <h2>{book.title}</h2>
                    <p>Autor: {book.author}</p>
                    <img src={`/BooksPictures/${book.id}.png`} alt={book.title} />
                </div>

                <div className="desc">
                <p>Opis:<br/>{book.description}</p>
                <p>Ilość dostępna do wypożyczenia: {book.amount}</p>
                <button>Wypożycz</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;