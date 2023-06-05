import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home"
import Login from "./pages/login"
import Cadastro from "./pages/cadastro"
import Redefinir from "./pages/redefinir_senha"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import LandPage from "./componentes/LandPage";

export default function App() {
  return (
    <div className="App">   
      
        <Router>
         
          <Routes>
            <Route path = "/" element = {<LandPage/>}/>     
            <Route exact path = "/home" element = {<Home/>}>
            </Route>
            <Route path = "/login" element = {<Login/>}>     
            </Route>
            <Route path = "/cadastro" element = {<Cadastro/>}/>     

            <Route path = "/search" element = {<Search/>}/>     
       
            <Route path = "/redefinir" element = {<Redefinir/>}>     
            </Route>
          </Routes>
          <br/>
            
              
          <ul>
            <li>
              <Link to="/home">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/cadastro">Cadastro</Link>
              <Link to="/redefinir">Redefinir</Link>
            </li>
          </ul>
        </Router>
    </div>
  );
}
