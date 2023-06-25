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



const ulrVerify = 'http://localhost/api/login/reset';

const urlConfirm = "http://localhost/api/reset/code";

const urlChange = "http://localhost/api/user/password";

import axios from 'axios';
import Footer from "../components/Footer";

export default function Reset() {

  const [password, setPassword] = useState()

  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  async function handleReset(e){
    e.preventDefault();

    const response = await axios.post(urlChange, {
          password
      }).then(function (response) {
        if(response.data){
          localStorage.removeItem('token_code');
          axios.defaults.headers.common['Reset'] = undefined;
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
          localStorage.setItem('token_code', JSON.stringify(token));
          axios.defaults.headers.common['Reset'] = `Bearer ${token}`;
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
      <div className="">
        <Header/>
        <Row className="justify-content-sm-center pt-3">
          <Col sm="auto" none="">
            <Form className="mb-5 rounded p-5 mx-3 fonte_login" onSubmit ={handleReset}>

              {page == 1 ? <SendEmail email={(e) => setEmail(e.target.value)} send={sendEmail}/> :
              page == 2 ? <ConfirmCode send={(e) => sendCode(e)} code={(e)=> setCode(e.target.value)} /> : 
              <ChangePassword setPassword={(e)=> setPassword(e.target.value)} password={password}/>}

            </Form>
            <Footer/>
            <div className="espaco">
            </div>
          </Col>
        </Row>
        
      </div>
    )

}
