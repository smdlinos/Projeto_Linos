import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register"
import { BrowserRouter as Router, Routes, Route, Link, useHref } from "react-router-dom";
import Search from "./pages/Search";
import LandPage from "./componentes/LandPage";
import { ScrollRestoration } from "react-router-dom";


export default function App() {
  return (
    <div className="App">   
      
        <Router>
         
          <Routes>
            <Route path = "/" element = {<LandPage/>}/>  

            <Route path = "/login" element = {<Login/>}/>     

            <Route exact path = "/home" element = {<Home/>}/>
 
            <Route path = "/register" element = {<Register/>}/>     

            <Route path = "/search" element = {<Search/>}/>     
       
            <Route path = "/reset" element = {<Reset/>}/>     

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
        </Router>
    </div>
  );
}
