import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Aboutus/AboutUs';
import Books from './components/Books/Books';


function App() {

  return (
    <>
      <Header />
      <AboutUs />
      <Books />
      <Footer />
    </>
  )
}

export default App
