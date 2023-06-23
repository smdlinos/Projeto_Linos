import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import Quest_D from "./pages/Quest_Detail";
import Config from "./pages/Config";
import Certificado from "./pages/Certificado";

import React, { useContext, useState, useEffect } from 'react';
import {Context} from './context/AuthContext'
import {Redirect} from 'react-router';
import { BrowserRouter , Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";

import Search from "./pages/Search";
import LandPage from "./components/LandPage";

import { AuthProvider } from './context/AuthContext';


export default function App() {
  
  const { authenticated } = useContext(Context);

  return (
    
    <div className="App">   
          <Routes>
            <Route path = "/" element = {<LandPage/>}/>  

          <Route path = "/login" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Login/>}/> 
         {/*    <Route path = "/login" element ={<Login/>}/>       */}

            <Route path = "/home" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Home/>}/> 
            {/* <Route path = "/home" element = { <Home/>}/> */}
 
            <Route path = "/register" element = {<Register/>}/> 

            <Route path = "/config" element = {<Config/>}/> 

            <Route path = "/search" element = {<Search/>}/>
       
            <Route path = "/reset" element = {<Reset/>}/>

            <Route path = "/certificado" element = {<Certificado/>}/>

            <Route path = "/quest_d/:id" element = {<Quest_D/>}/>

            <Route path="/home/:id" element= {<Home/>}/>

          </Routes>
          <br/>
          <ul>
            <li>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Cadastro</Link>
              <Link to="/reset">Redefinir</Link>
            </li>
          </ul>
    </div>
  );
}
