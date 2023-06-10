//CSS
import "../components/Tela.css"

//hooks
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useFetch} from "../hooks/useFetch";
import axios from 'axios';

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
const urlGet = "http://localhost/quests/temas";
const urlPost = "http://localhost/quests/user/create";
const urlValidate = "http://localhost/quests/user/create/validate";


export default function Register() {


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
          if (response.data) {
            setName('');
            setNickname('');
            setEmail('');
            setPassword('');
            setDataNascimento('');
            setGenero('');
            setEscolaridade('');
            setInteresses('');

            navigate("/home");

            console.log('Cadastrado Com Sucesso');
          }else {
            console.log("Houve um erro ao cadastrar");
            navigate("/");
          }

      }).catch(function (error) {
        console.log(error);
      });

      console.log(response);
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

        chageForm(response.data);
        console.log(response.data);

      }).catch(function (error) {

        console.log(error);

      });

      console.log(response);
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
    <div className="background">
        <Header/>
      <Row className="justify-content-sm-center">
      <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={handleSubmit} method="Post">
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