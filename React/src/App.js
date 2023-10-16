//styles
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import Quest_D from "./pages/Quest_Detail";
import Config from "./pages/Config";
import Certificado from "./pages/Certificado";
import Tabletop from "./pages/Tabletop";
import LandingPage from "./pages/LandingPage";
import Historico from "./pages/Historico";
import TodosQuests from "./pages/TodosQuests";
import QuestsDelete from "./pages/QuestsDelete";

//Hooks
import React, { useContext, useState, useEffect } from 'react';
import {Context} from './context/AuthContext'
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";


export default function App() {
  
  const { authenticated, user } = useContext(Context);

  return (
    
    <div className="App background_land">   
          <Routes>
            <Route path = "/" element = {<LandingPage/>}/>  

            <Route path = "/register" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Register/>}/> 

            <Route path = "/reset" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Reset/>}/>

            <Route path = "/login" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Login/>}/> 

            <Route path = "/home" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Home/>}/> 
 
            <Route path = "/home/:id" element= {<Home/>}/>

            <Route path = "/config" element = { authenticated && <Navigate to={'/config/'+localStorage.getItem('token').replace(/["]/g, '')}/>} /> 
            
            <Route path = "/config/:id" element= {<Config/>}/>

            <Route path = "/certificado" element = { authenticated ? <Certificado/> : <Navigate to='/home' /> }/> 

            <Route path = "/user/historico" element = {<Historico/>}/>

            <Route path = "/quests/all" element = {<TodosQuests/>}/>

            <Route path = "/account/delete" element = {<QuestsDelete/>}/>

            <Route path = "/quest_d/:id" element = {<Quest_D/>}/>

            <Route path = "/tabletop" element={ authenticated ? <Navigate to={'/tabletop/'+localStorage.getItem('token').replace(/["]/g, '')}/> :<Tabletop/>}/>
            <Route path = "/tabletop/:id" element={<Tabletop/>}/>

          </Routes>
          <br/>
          
    </div>
  );
}