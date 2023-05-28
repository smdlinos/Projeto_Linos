import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home"
import Contato from "./pages/contato"
import Cadastro from "./pages/cadastro"
import Redefinir from "./pages/redefinir_senha"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">   
      
        <Router>
         
          <Routes>
            <Route exact path = "/home" element = {<Home/>}>
            </Route>
            <Route path = "/contato" element = {<Contato/>}>     
            </Route>
            <Route path = "/cadastro" element = {<Cadastro/>}>     
            </Route>
            <Route path = "/redefinir" element = {<Redefinir/>}>     
            </Route>
          </Routes>
          <br/>
            
              
          <ul>
            <li>
              
              <Link to="/home">Home</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/cadastro">Cadastro</Link>
              <Link to="/redefinir">Redefinir</Link>
            </li>
          </ul>
        </Router>
    </div>
  );
}
