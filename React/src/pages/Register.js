//Styles
import "../components/Tela.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header"
import Form1 from "../components/Cadastro/Form1";
import Form2 from "../components/Cadastro/Form2";

//hooks
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, json} from "react-router-dom";
import { useEffect, useState } from "react";
import {useFetch} from "../hooks/useFetch";
import React, { useContext } from 'react';
import {Context} from '../context/AuthContext'

//Endpoints
const urlGet = "https://smdquests.000webhostapp.com/api/temas";
const urlPost = "https://smdquests.000webhostapp.com/api/user/register";
const urlValidate = "https://smdquests.000webhostapp.com/api/register/validate";


export default function Register() {



  const { authenticated, setAuthenticated } = useContext(Context);
  
  const { data:temas} = useFetch(urlGet);


  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [data_nascimento, setDataNascimento] = useState('');
  const [interesses, setInteresses] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const [form, setForm] = useState(1);

  const handleSubmit = async (e) => { // esse teste possivelmente deu certo
    e.preventDefault();
    fetch(urlPost, {
      method: 'post',
      body: JSON.stringify({
        name,  
        nickname,
        email,
        password, 
        data_nascimento, 
        genero, 
        escolaridade,
        interesses
     })
    }).then(function(response) {
        return response.json();
    }).then(data => {

          if (data.register) {
              setName('');
              setNickname('');
              setEmail('');
              setPassword('');
              setDataNascimento('');
              setGenero('');
              setEscolaridade('');
              setInteresses('');
        
              console.log('Cadastrado Com Sucesso');
              const token = data.token;
              localStorage.setItem('token', JSON.stringify(token));
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              setAuthenticated(true);
              navigate(`/home/${token}`);

          } else {
              console.log("Houve um erro ao cadastrar");
              navigate("/");
          }

      }).catch(error => {
        // Lidar com erros
        console.error(error);
    });

  }

  const validate = async () => { // esse teste possivelmente deu certo
    fetch(urlValidate, {
      method: 'post',
      body: JSON.stringify({
        name,  
        nickname, 
        email, 
        password, 
        data_nascimento, 
        genero, 
        escolaridade
     })
    }).then(function(response) {
        return response.json();
    }).then(data => {
          if(Array.isArray(data)){
            setFeedbacks(data[1]);
          }
          changeForm(data);

      }).catch(error => {
        // Lidar com erros
        console.error(error, "Dados Inválidos, tente novamente");
    });

  }


   const changeForm = (response) =>{ // verifica a resposta da validação e muda de form
    if(Array.isArray(response)){

      if(response[0]){
        setForm(2);
      }else{
        setFeedbacks(response[1]);
        console.log("Dados Inválidos, tente novamente "+ response[1]);
        navigate("/register" , { replace: true });
        navigate("/register");
      }

    } else {

      if(response){
        setForm(2);
      }else{
        console.log("Dados Inválidos, tente novamente ");
      }

    }

   }


  return (
    <div className="itens_nav body">
        <Header/>
      <Row className="justify-content-sm-center">
      <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-4" onSubmit={handleSubmit} method="Post">
          {form === 1 ? <Form1 
          feedbacks={feedbacks}
          nickname = {(e)=> setNickname(e.target.value)}
          name = {(e)=> setName(e.target.value)}
          email={(e)=> setEmail(e.target.value)}
          password={(e) => setPassword(e.target.value)}
          passwordValue = {password}
          data_nascimento = {(e)=> setDataNascimento(e.target.value)} 
          genero = {(e)=> setGenero(e.target.value)}
          escolaridade = {(e)=> setEscolaridade(e.target.value)}
          validate={validate}/> : 
          <Form2 
          temas={temas}
          interesses = {setInteresses}
          />}
          </Form>
            <Footer/>
        </Col>
      </Row>
    </div>
  );
}