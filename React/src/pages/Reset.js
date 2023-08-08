//Styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/Tela.css"

//Components
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header.js";
import ChangePassword from "../components/Reset/ChangePassword";
import SendEmail from "../components/Reset/SendEmail";
import ConfirmCode from "../components/Reset/ConfirmCode";

//Dependencias
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import axios from 'axios';

//Endpoints
const ulrVerify = 'https://smdquests.000webhostapp.com/api/login/reset';
const urlConfirm = "https://smdquests.000webhostapp.com/api/verify/code";
const urlChange = "https://smdquests.000webhostapp.com/api/user/password";


export default function Reset() {

  const [password, setPassword] = useState()

  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  async function handleReset(e){
    e.preventDefault();
    const token = localStorage.getItem('token_code').replace(/["]/g, '');
    fetch(urlChange, {
    method: 'post',
    body: JSON.stringify({
      password,
      token
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {

         if(data){
          localStorage.removeItem('token_code');
          console.log('Senha alterada com sucesso');
          navigate('/login');
        }

    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });


  }

   const sendEmail = async (e) =>  { // esse teste possivelmente deu certo
    e.preventDefault();
    let token;

    fetch(ulrVerify, {
    method: 'post',
    body: JSON.stringify({
      email
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {
        if(data[0]){
          token = data[1];
          localStorage.setItem('token_code', JSON.stringify(token));
          setter2(data[0]);
        }
    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });

  }


  const sendCode = async (e) => { 
    e.preventDefault();

    const token = localStorage.getItem('token_code').replace(/["]/g, '');
    fetch(urlConfirm, {
    method: 'post',
    body: JSON.stringify({
      token,
      code
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {
        setter3(data);
    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });
    
  }


  const setter2 = (response) =>{
    if(response){
      setPage(2);    
    }
  }

  const setter3 = (response) =>{
    if(response){
      setPage(3);  
    }
  }

  return ( 
      <div className="body">

        <Header/>

        <Row className="justify-content-sm-center pt-3 pb-5 mb-5">
          <Col sm="auto" none="" className="pb-5 mb-5">

            <Form className="mb-5 rounded p-5 mx-3 fonte_login" onSubmit ={handleReset}>

              {page == 1 ? <SendEmail email={(e) => setEmail(e.target.value)} send={sendEmail}/> :
              page == 2 ? <ConfirmCode send={(e) => sendCode(e)} code={(e)=> setCode(e.target.value)} /> : 
              <ChangePassword setPassword={(e)=> setPassword(e.target.value)} password={password}/>}

            </Form>
            
            

          </Col>
        </Row>
        <Footer/>
      </div>
    )

}