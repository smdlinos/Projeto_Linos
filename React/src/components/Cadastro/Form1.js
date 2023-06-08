import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css";
import Footer from "../Footer";
import Header from "../Header"
import { useState } from "react";


const Form1 = (props) => {


    const alteraForm = () => {
        props.form(2);
    }
    return <>
                    <h2>Realize seu Cadastro</h2>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email">Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Seu username" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="E-mail" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha" 
                    name = "password" 
                    onChange={props.password}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password">Repita sua senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Repita sua senha" 
                    name = "password" 
                    onChange={props.password}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email">Nome Completo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    />
                    </Form.Group>


                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="genero">Gênero:</Form.Label>
                    {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">

                    <Form.Check
                    inline
                    label="Masculino"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    />
                    <Form.Check
                    inline
                    label="Feminino"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    />
                    <Form.Check
                    inline
                    label="Outro"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    />
                    </div>
                    ))}
                    </Form.Group>


                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade">Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example">
                        <option value="1">Sem escolaridade</option>
                        <option value="2">Ensino Fundamental</option>
                        <option value="3">Ensino Médio</option>
                        <option value="4">Ensino Supeior</option>
                    </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                    <Form.Label htmlfor="data">Data de Nascimento:</Form.Label>
                    <Form.Control
                    type="date" id="data"  
                    name="meeting-time" value=""/>
                    </Form.Group>

                    <br/>
                    <Button variant="primary" type="button"  onClick={alteraForm} className="px-5 mb-3 mt-3">
                    Próximo
                    </Button>
    </>
}

export default Form1;