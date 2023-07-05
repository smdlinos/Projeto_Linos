
//Styles
import "../Tela.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';


//Dependences
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch"


const Form1 = (props) => {

    //const [password1, setPassword1] = useState(1);

    const alteraForm = (e) => {
        e.preventDefault();
        props.validate();
   }

    return <>
                <div className="fonte_login">
                    <h2 className="titulo_login mb-4">Realize seu Cadastro</h2>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="nickname" className="nickname tamanho">Nickname</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Seu username" 
                    className="" 
                    name = "nickname"
                    onChange={props.nickname}
                    />

                    </Form.Group> 

                    
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email" className="login_espacamento pt-2 tamanho">E-mail</Form.Label>
                    <Form.Control        
                    type="email" 
                    placeholder="email@example.com" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="senha_cadastro pt-2">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha" 
                    name = "password1"
                    id="passaword" 
                    onChange={props.password}
                    />
                    </Form.Group>

                    

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="name" className="nome_c pt-2">Nome Completo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Insira seu Nome (Nome para o certificado)" 
                    className="" 
                    name = "name"
                    onChange={props.name}
                    />
                    </Form.Group>


                    <Form.Group className="mb-2" onChange={props.genero}>
                    <Form.Label htmlFor="genero" className="nickname pt-2">Gênero:</Form.Label>
                    {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">

                    <Form.Check
                    inline
                    label="Masculino"
                    name="group1"
                    value="Masculino"
                    type={type}
                    id={`inline-${type}-1`}
                    />
                    <Form.Check
                    inline
                    label="Feminino"
                    name="group1"
                    value="Feminino"
                    type={type}
                    id={`inline-${type}-2`}
                    />
                    <Form.Check
                    inline
                    label="Outro"
                    name="group1"
                    value="Outro"
                    type={type}
                    id={`inline-${type}-3`}
                    />
                    </div>
                    ))}
                    </Form.Group>


                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.escolaridade}>
                        <option value="default">Escolha sua escolaridade</option>
                        <option value="Sem escolaridade">Sem escolaridade</option>
                        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                        <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                        <option value="Ensino Médio Icompleto">Ensino Médio Icompleto</option>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        <option value="Pós-Graduação">Pós-Graduação</option>
                    </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                    <Form.Label htmlFor="date" className="data pt-2">Data de Nascimento:</Form.Label>
                    <Form.Control 
                    onChange={props.data_nascimento}
                    type="date" id="date" 
                    name="meeting-time" />
                    </Form.Group>

                    <br/>
                    <Button variant="primary" type="button" onClick={alteraForm} className="px-5 mb-3 mt-3 botao">
                    Próximo
                    </Button>
                    </div>
                    
    </>
}

export default Form1;