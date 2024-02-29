import React ,{ useState } from "react";
import './Books.css'; 
import booksData from './../../data/books.json';




const Books = () =>{
    return(
    <div id='Books'>
      {booksData.map((book) => (
        <div key={book.id} className="book-box" title={book.title}>
                <b>{book.title}</b>
                <br/>
                {book.author}
                <img src={`/BooksPictures/${book.id}.png`} alt={book.title} />
                
        </div>
      ))}
    </div>
    );
};

export default Books;