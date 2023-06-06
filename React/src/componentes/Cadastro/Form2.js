import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"
import Footer from "../Footer";
import Header from "../Header"
import { useState } from "react";


const Form2 = () => {
    return <>
                    <h2>Escolha seus interesses</h2>
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
                    <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
                    Enviar
                    </Button>   
    </>
}

export default Form2;