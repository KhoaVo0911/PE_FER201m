import './App.css';
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import TopNews from './components/TopNews'
import FormAddEdit from './components/FormAdd';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<TopNews />} />
        <Route path="/add" element={<FormAddEdit />} />
        <Route path="/update/:id" element={<FormAddEdit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
