import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/Tela.css"
import Footer from "../components/Footer";
import Header from "../components/Header"
import { useEffect, useState } from "react";
import Form1 from "../components/Cadastro/Form1";
import Form2 from "../components/Cadastro/Form2";
const urlGet = "http://localhost/quests/temas";
const urlPost = "";
import {useFetch} from "../hooks/useFetch";

export default function Register() {


  const { data:temas} = useFetch(urlGet);
  const { data:user, httpConfig, loading, error} = useFetch(urlPost);

  function registerUsuario(e){
    e.preventDefault()

    // if(password1 == password2){
    //   setPassword(password1);
    //   console.log('Senhas Iguais', password1, password2, password);
    // } else {
    //   console.log('Senhas Diferentes')
    // }

    const user = {
      name,  
      nickname, 
      email, 
      password, 
      data_nascimento, 
      genero, 
      escolaridade,
      interesses
    }
    console.log(user);
  }

  
 
  const [password, setPassword] = useState();
  
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [genero, setGenero] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [data_nascimento, setDataNascimento] = useState();
  const [interesses, setInteresses] = useState([]);
  

  const [form, setForm] = useState(2);

  

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,  
      nickname, 
      email, 
      password, 
      data_nascimento, 
      genero, 
      escolaridade,
      interesses
    }
    console.log(user);
    httpConfig(user, "POST");


    setName('');
    setNickname('');
    setEmail('');
    setPassword('');
    setDataNascimento('');
    setGenero('');
    setEscolaridade('');
    setInteresses('');
  
  };






  


  return (
    <div className="background">
        
        <Header/>
      <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={registerUsuario} method="Post">
          {form === 1 ? <Form1 
          nickname = {(e)=> setNickname(e.target.value)}
          name = {(e)=> setName(e.target.value)}
          email={(e)=> setEmail(e.target.value)}
          password={setPassword}
          data_nascimento = {(e)=> setDataNascimento(e.target.value)} 
          genero = {(e)=> setGenero(e.target.value)}
          escolaridade = {(e)=> setEscolaridade(e.target.value)}
          form={setForm}/> : <Form2 
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