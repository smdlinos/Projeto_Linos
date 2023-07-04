
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
import Search from "./pages/Search";
import Todos_Quests from "./pages/TodosQuests";

//Hooks
import React, { useContext, useState, useEffect } from 'react';
import {Context} from './context/AuthContext'
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";



export default function App() {
  
  const { authenticated, user } = useContext(Context);

  return (
    
    <div className="App">   
          <Routes>
            <Route path = "/" element = {<LandingPage/>}/>  

            <Route path = "/register" element = {<Register/>}/> 

            <Route path = "/reset" element = {<Reset/>}/>

            <Route path = "/login" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Login/>}/> 

            <Route path = "/home" element = { authenticated ? <Navigate to={'/home/'+localStorage.getItem('token').replace(/["]/g, '')}/> : <Home/>}/> 
 
            <Route path = "/home/:id" element= {<Home/>}/>

            <Route path = "/config" element = { authenticated && <Navigate to={'/config/'+localStorage.getItem('token').replace(/["]/g, '')}/>} /> 
            
            <Route path = "/config/:id" element= {<Config/>}/>

            <Route path = "/certificado" element = {<Certificado/>}/> {/*id do certificado vai ser relacionado ao id do usuário no bd, logo
            //não precisa do token, só do id do certificado -> no estilo do quests_d */} 
            <Route path = "/user/:id/historic" element = {<Search/>}/> // o histórico vai puxar um conjunto de infos

            <Route path = "/responses/:id" element = {<Search/>}/> //mesmo esquema do quests_d // rota provisória

            <Route path = "/search" element = {<Search/>}/> //rota de pesquisa
       
            <Route path = "/todos_quests" element = {<Todos_Quests/>}/>

            <Route path = "/quest_d/:id" element = {<Quest_D/>}/>

            <Route path = "/tabletop/:id" element={<Tabletop/>}/> {/*mesmo esquema do quests_d -> as infos só chegam com o header Authenticated*/}

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
