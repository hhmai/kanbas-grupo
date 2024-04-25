import React, { useContext } from 'react';
import './App.css';
import Home from './Home';
import Signup from './Firebase/signup';
import Login from './Firebase/login';
import Search from './Search';
import Rate from './Rate';
import Profile from './Profile';
import BrowseProfiles from './Profile/browseProfiles';
import AdminBrowseProfiles from './Profile/adminBrowseProfiles';
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./Firebase/AuthContext";

function App() {
  return (
    <>
      <HashRouter>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/search" element={<Search/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile/browse' element={<BrowseProfiles/>} />
          <Route path='/profile/admin' element={<AdminBrowseProfiles/>} />
          <Route path='/search/:movieTitle' element={<Search/>} />
          <Route path="/ratepage/:movieTitle" element={<Rate/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
