import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Tela.css";
import { useEffect, useState } from "react";


const Form1 = (props) => {

    const [password1, setPassword1] = useState(1);
    const [password2, setPassword2] = useState(2);


    const alteraForm = () => {
        props.password(password1);
        props.form(2);
    }

    const senhasDiferentes = () =>{
        alert('senhas diferemtes');
    }

    return <>
                    <h2>Realize seu Cadastro</h2>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="nickname">Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Seu username" 
                    className="" 
                    name = "nickname"
                    onChange={props.nickname}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email">E-mail</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="email@example.com" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha" 
                    name = "password1" 
                    onChange={(e) => setPassword1(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password2">Repita sua senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Repita sua senha" 
                    name = "password2" 
                    onChange={(e) => setPassword2(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="name">Nome Completo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Insira seu Nome (Nome para o certificado)" 
                    className="" 
                    name = "name"
                    onChange={props.name}
                    />
                    </Form.Group>


                    <Form.Group className="mb-2" onChange={props.genero}>
                    <Form.Label htmlFor="genero">Gênero:</Form.Label>
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
                    <Form.Label htmlFor="Escolaridade" >Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.escolaridade}>
                        <option value="Sem escolaridade">Sem escolaridade</option>
                        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                        <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                        <option value="Ensino Médio Icompleto">Ensino Médio Icompleto</option>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Supeior Incompleto">Ensino Supeior Incompleto</option>
                        <option value="Ensino Supeior Completo">Ensino Supeior Completo</option>
                        <option value="Pós-Graduação">Pós-Graduação</option>
                    </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                    <Form.Label htmlFor="date" >Data de Nascimento:</Form.Label>
                    <Form.Control 
                    onChange={props.data_nascimento}
                    type="date" id="date" 
                    name="meeting-time" />
                    </Form.Group>

                    <br/>
                    {password1 === password2 ? <Button variant="primary" type="button"  onClick={alteraForm} className="px-5 mb-3 mt-3">
                    Próximo
                    </Button>: <Button variant="primary" type="button"  onClick={senhasDiferentes} className="px-5 mb-3 mt-3">
                    Próximo
                    </Button>}
                    
    </>
}

export default Form1;