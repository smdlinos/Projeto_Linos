import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import "../components/Tela.css"
import Header from "../components/Header.js";
import ChangePassword from "../components/Reset/ChangePassword";
import SendEmail from "../components/Reset/SendEmail";
import ConfirmCode from "../components/Reset/ConfirmCode";



const ulrVerify = 'http://localhost/quests/reset';

const urlConfirm = "http://localhost/quests/codeConfirmation";

const urlChange = "http://localhost/quests/changePassword";

import axios from 'axios';

export default function Reset() {
// essa página deve possuir 3 componentes dinâmicos, confirmar email => confirmar código => mudar a senha
  const [password, setPassword] = useState()

  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  async function handleReset(e){
    e.preventDefault();

    const response = await axios.post(urlChange, {
          email,
          password
      }).then(function (response) {
        if(response.data){
          localStorage.removeItem('token_code');
          console.log('Senha alterada com sucesso');
          navigate('/login');
        } 
        }).catch(function (error) {

          console.log(error);

        });
  }



  const sendEmail = async (e) => { 
      let token;
      const response = await axios.post(ulrVerify, {
          email
      }).then(function (response) {

        if(response.data[0]){
          token = response.data[1];
          console.log(token, response.data);
          localStorage.setItem('token_code', JSON.stringify(token));
          setter2(response.data[0]);

        }
          
        }).catch(function (error) {

          console.log(error);

        });
  }


  const sendCode = async (e) => { 
    e.preventDefault();

    const token = localStorage.getItem('token_code');

      const response = await axios.post(urlConfirm, {
          token,
          code
      }).then(function (response) {

        console.log(response.data);

        if(response.data){
          setter3(response.data);
        }
  
        }).catch(function (error) {

          console.log(error);

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
      <div className="background">
        <Header/>
        <Row className="justify-content-sm-center">
          <Col sm="auto" none="">
            <Form className="mb-5 rounded p-5 mx-3" onSubmit ={handleReset}>

              {page == 1 ? <SendEmail email={(e) => setEmail(e.target.value)} send={sendEmail}/> :
              page == 2 ? <ConfirmCode send={(e) => sendCode(e)} code={(e)=> setCode(e.target.value)} /> : 
              <ChangePassword setPassword={(e)=> setPassword(e.target.value)} password={password}/>}

            </Form>
            <div className="espaco">
            </div>
          </Col>
        </Row>
      </div>
    )

}
