
//Styles
import "../Tela.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';


//Dependences
import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate, useLocation} from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"


const Form1 = (props) => {

    // const [password1, setPassword1] = useState(1);
    // const  [teste, setTeste] = useState(props.feedbacks);

    const pattern = [
        {
            id: "name",
            value: false
        },
        {
            id: "nickname",
            value: false
        },
        {
            id: "email",
            value: false
        },
        {
            id: "password",
            value: false
        },
        {
            id: "data_nascimento",
            value: false
        },
        {
            id: "genero",
            value: false
        },
        {
            id: "escolaridade",
            value: false
        }
    ]
    const navigate  = useNavigate();
    const location = useLocation();
    const [feedback, setFeedback] = useState(pattern)


    function ativaFeedbacks(feedback, newFeedbacks){


        for (var j = 0; j < newFeedbacks.length; j++) {
            for (var i = 0; i < feedback.length; i++) {
                if(feedback[i].id == newFeedbacks[j]){
                    feedback[i].value = true;
                    newFeedbacks.splice(j,1);
                }
                continue
            }
        }

        
        console.log( feedback )
        return feedback;
    }


    async function atualizaFeedbakcs(){
        props.validate();
        setFeedback(ativaFeedbacks(pattern, props.feedbacks));
    }
    
    useEffect(()=>{
        atualizaFeedbakcs();
        props.validate();
        setFeedback(ativaFeedbacks(pattern, props.feedbacks));
    },[])


    const alteraForm = (e) => {
        props.validate();

        setFeedback(ativaFeedbacks(pattern, props.feedbacks));
        navigate("/register" , { replace: true });
        navigate("/register");
   }
    //console.log( feedback )

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
                    required
                    />
                    </Form.Group> 

                    {feedback[1].value && <p className="alert">Dados inválidos e/ou nickname já cadastrado</p>}

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email" className="login_espacamento pt-2 tamanho">E-mail</Form.Label>
                    <Form.Control        
                    type="email" 
                    placeholder="email@example.com" 
                    className="" 
                    name = "email"
                    onChange={props.email}
                    required
                    />
                    </Form.Group>
                    {feedback[2].value && <p className="alert">Dados inválidos e/ou email já cadastrado</p>}

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="senha_cadastro pt-2">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha" 
                    name = "password1"
                    id="passaword" 
                    onChange={props.password}
                    required
                    />
                    </Form.Group>
                    {feedback[3].value && <p className="alert">Campo obrigatório</p> }

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="name" className="nome_c pt-2">Nome Completo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Insira seu Nome (Nome para o certificado)" 
                    className="" 
                    name = "name"
                    onChange={props.name}
                    required
                    />
                    </Form.Group>
                    {feedback[0].value && <p className="alert">Campo obrigatório</p>}

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Escolha seu gênero:</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.genero} required>
                        <option value="Masculino">Masculino</option>
                        
                        <option value="Feminino">Feminino</option>
                        
                        <option value="Outro">Outro</option>
                    </Form.Select>
                    </Form.Group>

                    {feedback[5].value && <p className="alert">Campo obrigatório</p>}

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.escolaridade} required>
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

                    
                    {feedback[6].value && <p className="alert">Campo obrigatório</p>}
                   
                    <Form.Group required >
                    <Form.Label htmlFor="date" className="data pt-2">Data de Nascimento:</Form.Label>
                    <Form.Control 
                    onChange={props.data_nascimento}
                    type="date" id="date" 
                    name="meeting-time" />
                    </Form.Group>
                    {feedback[4].value && <p className="alert">Campo obrigatório</p>}
                    <br/>
                    <Button variant="primary" type="button" onClick={alteraForm} className="px-5 mb-3 mt-3 botao">
                    Próximo
                    </Button>
                    </div>
                    
    </>
}

export default Form1;