import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
