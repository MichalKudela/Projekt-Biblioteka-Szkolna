import React from 'react';
import './App.css';
import Books from './Pages/Books/Books';
import Details from "./Pages/BooksDetails/BooksDetails";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Books />}/>
          <Route path='/books' element={<Books />}/>
          <Route path='/details/:bookId' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
