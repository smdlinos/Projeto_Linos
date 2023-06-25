//CSS
import "../components/Tela.css"

//hooks
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, json} from "react-router-dom";
import { useEffect, useState } from "react";
import {useFetch} from "../hooks/useFetch";
import axios from 'axios';

import React, { useContext } from 'react';
import {Context} from '../context/AuthContext'

//Components
import Footer from "../components/Footer";
import Header from "../components/Header"
import Form1 from "../components/Cadastro/Form1";
import Form2 from "../components/Cadastro/Form2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


//endpoints
const urlGet = "http://localhost/api/temas";
const urlPost = "http://localhost/api/user/register";
const urlValidate = "http://localhost/api/register/validate";


export default function Register() {

  const { authenticated, setAuthenticated } = useContext(Context);
  
  const { data:temas} = useFetch(urlGet);


  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [genero, setGenero] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [data_nascimento, setDataNascimento] = useState();
  const [interesses, setInteresses] = useState([]);
  

  const [form, setForm] = useState(1);
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post(urlPost, {
        name,  
        nickname, 
        email, 
        password, 
        data_nascimento, 
        genero, 
        escolaridade,
        interesses
      }).then(function (response) {

        if (response.data.register) {
          setName('');
          setNickname('');
          setEmail('');
          setPassword('');
          setDataNascimento('');
          setGenero('');
          setEscolaridade('');
          setInteresses('');
    
          console.log('Cadastrado Com Sucesso');
          const token = response.data.token;
          localStorage.setItem('token', JSON.stringify(token));
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          setAuthenticated(true);

          navigate(`/home/${token}`);
        }else {
          console.log("Houve um erro ao cadastrar");
          navigate("/");
        }
      }).catch(function (error) {
        console.log(error);
      });

    } catch(error){
      console.log(error);
    }
  
  }


   const validate = async () =>{
    try{
      const response = await axios.post(urlValidate, {
        name,  
        nickname, 
        email, 
        password, 
        data_nascimento, 
        genero, 
        escolaridade
      }).then(function (response) {

        console.log(response.data);
        chageForm(response.data);

      }).catch(function (error) { // feedback deve ser inserido aqui

        console.log("Dados Inválidos, tente novamente")
        // console.log(error);

      });
    } catch(error){
      console.log(error);
    }
  
  }


   const chageForm = (response) =>{ // verifica a resposta da validação e muda de form
    if(response){
      setForm(2);
    }else{
      console.log("Dados Inválidos, tente novamente")
    }

   }


  return (
    <div className="alinhamento">
        <Header/>
      <Row className="justify-content-sm-center">
      <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-4" onSubmit={handleSubmit} method="Post">
          {form === 1 ? <Form1 
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