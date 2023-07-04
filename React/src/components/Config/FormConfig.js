
//Styles
import "../Tela.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal_Senha from "./ModalSenha";
import etiqueta from "../imagens/etiqueta.svg";
import Modal_Interesse from "./ModalTag";
import Modal_Deletar from "./ModalDeletar";
import Lixo from "../imagens/trash.svg"
//import Trash from "../imagens/trash.svg"


//Dependences
import { useFetch } from "../../hooks/useFetch"
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';




const urlI = 'https://smdquests.000webhostapp.com/api/user/interesses';


const Form_config = (props) => {
    
    const [interesses,setInteresses] = useState();
    const [loading, setLoading] = useState(true);
    const {user} = useContext(Context);
    console.log(user)
    const [modalShow, setModalShow] = React.useState(false);
    //const [password1, setPassword1] = useState(1);

    const alteraForm = (e) => {
        e.preventDefault();
        props.validate();
   }
   useEffect(() => {
    async function getInteresses() { // esse teste possivelmente deu certo

        const token = localStorage.getItem('token').replace(/["]/g, '');

        fetch(urlI, {
          method: 'post',
          body: JSON.stringify({
            token
        })
        }).then(function(response) {
            return response.json();
        }).then(data => {
            setInteresses(data.interesses);
          }).catch(error => {
            // Lidar com erros
            console.error(error);
        });

    }

    getInteresses();
    setLoading(false);
  }, [])
    return <>
   
                <div className="fonte_login">
                    <p className="titulo_login alinhamento mb-4">Nickname</p>
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
                    
                    <div className="senha_config">

                    <Button variant="link" className="senha_config" onClick={() => setModalShow(true)}>
                            Redefinir Senha
                        </Button>

                        <Modal_Senha
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                    


                    

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


                

                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Gênero</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.escolaridade}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={props.escolaridade}>
                        <option value="default">Escolha sua escolaridade</option>
                        <option value="Sem escolaridade">Sem escolaridade</option>
                        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                        <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
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
                    <div>
                    <p>Seus interesses</p>
                    <div className="tags">
                    {interesses && loading == false  &&
                    <>
                    {interesses.map((e) => (
                  
                    <button key={e.id_tema} className="nao-recomendado">
                    <img src={etiqueta} alt="etiqueta_icon" className="pe-2"></img>{e.tema}
                    </button>
                    ))}
                </>
              }

              </div>
              <div className="senha_config">

                <Button variant="link" className="senha_config" onClick={() => setModalShow(true)}>
                        Redefinir seus interesses
                    </Button>

                    <Modal_Interesse
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                    </div>
                    
                    <Button variant="primary" type="button" onClick={alteraForm} className="px-5 mb-3 mt-3 botao">
                    SALVAR ALTERAÇÕES
                    </Button>
                    <div className="botao_deletar">
                    <Button variant="link" type="button" className=" mb-3 mt-3 botao_deletar" >
                    <img src={Lixo} alt="lixo" className="lixeira pb-1"></img>DELETAR CONTA
                    </Button>
                    </div>
                    
                    </div>
                    
    </>
}

export default Form_config;