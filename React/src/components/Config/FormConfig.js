
//Styles
import "../Tela.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal_Senha from "./ModalSenha";
import etiqueta from "../imagens/etiqueta.svg";
import Modal_Interesse from "./ModalTag";
import Modal_Deletar from "./ModalDeletar";
import Lixo from "../imagens/trash.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import horas from "../imagens/horas.svg"
import Duvida from "../imagens/duvida.svg"
import Logo from "../imagens/quest_logo.png"
import "../Tela.css";
import Perfil_k from "../imagens/Perfil_k.svg"
import Editar from "../imagens/editar_perfil.svg"
//import Trash from "../imagens/trash.svg"


//Dependences
import { useFetch } from "../../hooks/useFetch"
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';



const urlI = 'https://smdquests.000webhostapp.com/api/user/interesses';
const urlTemas = 'https://smdquests.000webhostapp.com/api/temas';
const urlPost = 'https://smdquests.000webhostapp.com/api//user/update';

const Form_config = (props) => {


    const [interessesToView , setInteressesToView] = useState([]); // mostrados
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);
    const {user} = useContext(Context);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const { data:temas} = useFetch(urlTemas);
    


    useEffect(()=>{
        if (user != null) {
            setLoading1(false);
        }
    }, [user])


    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState(user ? user.user.nickname : '');
    const [email, setEmail] = useState(user ? user.user.email : '');
    const [name, setName] = useState(user ? user.user.name : '');
    const [genero, setGenero] = useState(user ? user.user.genero : '');
    const [escolaridade, setEscolaridade] = useState(user ? user.user.escolaridade : '');
    const [data_nascimento, setDataNascimento] = useState(user ? user.user.data_nascimento : '');
    const [interesses, setInteresses] = useState([]); // intereses que vao pro bd

    useEffect(() =>{
    if (loading1 == false) {
      setName(user.user.name);
      setNickname(user.user.nickname);
      setEmail(user.user.email);
      setPassword(user.user.password);
      setDataNascimento(user.user.data_nascimento);
      setGenero(user.user.genero);
      setEscolaridade(user.user.escolaridade);
      setInteresses(user.interesses);
     }
    },[user]);

    console.log(loading,name,  
            nickname, 
            email, 
            password, 
            data_nascimento, 
            genero, 
            escolaridade,
            interesses);

    const handleSubmit = async (e) => { // esse teste possivelmente deu certo
        e.preventDefault();

        fetch(urlPost, {
          method: 'post',
          body: JSON.stringify({
            name,  
            nickname, 
            email, 
            password, 
            data_nascimento, 
            genero, 
            escolaridade,
            interesses
         })
        }).then(function(response) {
            return response.json();
        }).then(data => {

              if (data.register) {
                  console.log('Atualizado com sucesso');
                  const token = data.token;
                  localStorage.setItem('token', JSON.stringify(token));
                  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                  setAuthenticated(true);
                  navigate(`/home/${token}`);

              } else {
                  console.log("Houve um erro ao aualizar");
                  navigate(`/home/${token}`);
              }

          }).catch(error => {
            // Lidar com erros
            console.error(error);
        });

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
            setInteressesToView(data.interesses);
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
                 <Form className="mb-4 rounded p-5 mx-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-2">

                    <Row className="imagem_perfil">
                        <div className="alinhamento">
                            <img src={Perfil_k} alt="perfil_koala" className="perfil_koala m-auto pt-3"></img>
                            <Col className="botao_editar">
                                <img src={Editar} alt="editar" className=" m-auto pt-3 "></img>
                            </Col>
                        </div>
                    </Row>
                    <p className="titulo_login alinhamento mb-4">{user ? '@'+user.user.nickname : ''}</p>

                    <Form.Label htmlFor="nickname" className="nickname tamanho">Nickname</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Seu username" 
                    className="" 
                    name = "nickname"
                    onChange={(e)=> setNickname(e.target.value)}
                    defaultValue={user ? user.user.nickname : ''}
                    />
                    </Form.Group>

                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="email" className="login_espacamento pt-2 tamanho">E-mail</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="email@example.com" 
                    className="" 
                    name = "email"
                    onChange={(e)=> setEmail(e.target.value)}
                    defaultValue={user ? user.user.email : ''}
                    />

                    </Form.Group>
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="password1" className="senha_cadastro pt-2">Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Sua senha" 
                    name = "password1"
                    id="passaword" 
                    defaultValue={'*******'}
                    disabled
                    />

                    </Form.Group>
                    
                    <div className="senha_config">

                    <Button variant="link" className="senha_config" onClick={() => setModalShow(true)}>
                            Redefinir Senha
                        </Button>

                     {modalShow &&  <Modal_Senha
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            password= {setPassword}
                        />
                      }
                    </div>
                    
                    <Form.Group className="mb-2">
                    <Form.Label htmlFor="name" className="nome_c pt-2">Nome Completo</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Insira seu Nome (Nome para o certificado)" 
                    className="" 
                    name = "name"
                    onChange={(e)=> setName(e.target.value)}
                    defaultValue={user ? user.user.name : ''}
                    />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Gênero</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={(e)=> setGenero(e.target.value)} defaultValue={user ? user.user.genero : ''}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </Form.Select>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                    <Form.Label htmlFor="Escolaridade" className="nickname pt-2">Escolaridade</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={(e)=> setEscolaridade(e.target.value)}>
                        <option value="default">{user ? user.user.escolaridade : ''}</option>
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
                    onChange={(e)=> setDataNascimento(e.target.value)}
                    defaultValue={user ? user.user.data_nascimento : ''}
                    type="date" id="date" 
                    name="meeting-time" />
                    </Form.Group>
                    
                    <br/>

              <div>
                    <p>Seus interesses</p>
              <div className="tags">
                    {interessesToView && loading == false  &&
                    <>  
                        {interessesToView.map((e) => (
                            
                            <button type='button'  disabled key={e.id_tema} className="nao-recomendado">
                             <img src={etiqueta} alt="etiqueta_icon" className="pe-2"></img>{e.tema}
                            </button >
                        ))}
                    </>
                    }

              </div>

              <div className="senha_config">

                <Button variant="link" className="senha_config" onClick={() => setModalShow2(true)}>
                        Redefinir seus interesses
                </Button>
                  {modalShow2 && 
                    <Modal_Interesse
                        show={modalShow2}
                        inter = {setInteresses}
                        interview = {setInteressesToView}
                        onHide={setModalShow2}
                        temas={temas}
                    />
                  }

              </div>

            </div>
                    
                    <Button variant="primary" type="submit" className="px-5 mb-3 mt-3 botao">
                    SALVAR ALTERAÇÕES
                    </Button>
            </Form>
            <div className="botao_deletar">

                
            <Button variant="link" type="button" className=" mb-3 mt-3 botao_deletar" onClick={() => setModalShow3(true)}>
            <img src={Lixo} alt="lixo" className="lixeira pb-1"></img>DELETAR CONTA
            </Button>

            <Modal_Deletar
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            </div>
            
            </div>
                    
    </>
}

export default Form_config;