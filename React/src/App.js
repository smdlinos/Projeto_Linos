import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register"

import React, { useContext } from 'react';
import {Context} from './context/AuthContext'
import {Redirect} from 'react-router';
import { BrowserRouter , Routes, Route, Link, Swithc , useNavigate, Navigate} from "react-router-dom";

import Search from "./pages/Search";
import LandPage from "./components/LandPage";

import { AuthProvider } from './context/AuthContext';


export default function App() {

  const { authenticated } = useContext(Context);


  return (
    
    <div className="App">   
          <Routes>
            <Route path = "/" element = {<LandPage/>}/>  

            <Route path = "/login" element = {<Login/>}/>     
{/* 
            <Route path = "/home" element = { authenticated ? <Home/>: <Navigate to="/login"/>}/> */}
            <Route path = "/home" element = { <Home/>}/>
 
            <Route path = "/register" element = {<Register/>}/>  

            <Route path = "/search" element = {<Search/>}/>
       
            <Route path = "/reset" element = {<Reset/>}/>

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
