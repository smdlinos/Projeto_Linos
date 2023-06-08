import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "../components/Tela.css"
import Header from "../components/Header.js";
import Reset3 from "../components/Reset/Reset3";

export default function Reset() {
// essa página deve possuir 3 componentes dinâmicos, confirmar email => confirmar código => mudar a senha
  const [password, setPassword] = useState()
  const [password1, setPassword1] = useState()
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  function cadastroUsuário(e){
    e.preventDefault()
    if(password1 === password){
      console.log(`Senha: ${password}`)
      setRedirect(true);
    } else {
      console.log("Senhas diferentes")
    }
  }

  


  return (
    <Reset3 cadastro={cadastroUsuário} redirect={redirect} navigate={navigate}/>
  );
}
