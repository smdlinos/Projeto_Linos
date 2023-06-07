import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentes/Tela.css"
import Footer from "../componentes/Footer";
import Header from "../componentes/Header"
import { useEffect, useState } from "react";
import Form1 from "../componentes/Cadastro/Form1";
import Form2 from "../componentes/Cadastro/Form2";



export default function Register() {


  function registerUsuario(e){
    e.preventDefault()
    console.log(`Usuário: ${email} Senha: ${password}`)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
   // verifica as requisições e atualiza
  const [form, setForm] = useState(1);
 
  console.log(form);

  return (
    <div className="background">
        
        <Header/>
      <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3" onSubmit={registerUsuario} method="Post">
          {form === 1 ? <Form1 email={(e)=> setEmail(e.target.value)} password={(e)=> setPassword(e.target.value)} form={setForm}/> : <Form2 />}
          </Form>
            <Footer/>
        </Col>
      </Row>
    </div>
  );
}