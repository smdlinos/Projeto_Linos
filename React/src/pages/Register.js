//CSS
import "../components/Tela.css"

//hooks
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useFetch} from "../hooks/useFetch";

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
const urlPost = "http://localhost/quests/user/create/validate";
const urlValidate = "httt://localhost/quests/user/create/validate";


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

  //const [validate, setValidate] = useState(false);
  
  const { data:validate, httpConfig, loading, error} = useFetch(urlPost);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      name,  
      nickname, 
      email, 
      password, 
      data_nascimento, 
      genero, 
      escolaridade,
      interesses
    }

    console.log(newUser);
    httpConfig(newUser, "POST");
    // setName('');
    // setNickname('');
    // setEmail('');
    // setPassword('');
    // setDataNascimento('');
    // setGenero('');
    // setEscolaridade('');
    // setInteresses('');
    // navigate("/home");
  };

  console.log(validate);
  
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
          password={setPassword}
          data_nascimento = {(e)=> setDataNascimento(e.target.value)} 
          genero = {(e)=> setGenero(e.target.value)}
          escolaridade = {(e)=> setEscolaridade(e.target.value)}
          form={setForm}
          validate={handleSubmit}/> : 
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