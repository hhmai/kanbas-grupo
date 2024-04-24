import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Search" element={<Search/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
