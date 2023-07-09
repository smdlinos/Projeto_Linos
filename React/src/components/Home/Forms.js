//Styles
import "../Tela.css";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import estrela from "../imagens/estrela.svg";
import User from "../imagens/user2.svg";
import House from "../imagens/home2.svg";
import Clock from "../imagens/Clock_q.svg"
import Star from "../imagens/star_q.svg";

//Dependeces
import { useNavigate } from "react-router-dom";

function Forms(props){
    const navigate = useNavigate();
    


    return(
        <div>
            <Container className="">
              <Row  className="mx-auto">
               <Col className=" mb-2">  
                    <Carousel >
                    {props.quests && props.quests.map((quest) => (
                        <Carousel.Item key={quest.id_questionario}>
                            <Card    
                                onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                id = {quest.id_questionario}
                                style={{ width: '100%' , borderRadius: "2rem"}}
                                className=" card"
                            >
                            <Card.Body className="mx-4">
                        
                                    <Row>
                                        <Col>
                                        <p className="titulo_login_q">{quest.titulo}</p>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs={1} className="espaco_card">
                                        <img src={User} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.autor}</small>
                                        </Col>
                                    </Row>
                                    <Row className="pb-1">
                                        <Col xs={1}>
                                        <img src={House} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.instituicao}</small><br/>
                                        </Col>
                                    </Row>
                                    <Row className="pb-2">
                                        <Col>
                                        <small>{quest.descricao}</small>
                                        </Col>
                                    </Row>
                                    
                                   
                                    <Row className="pb-2">
                                       
                                        <Col xs={1}>
                                        <img src={Clock} alt="relogio"/>
                                        </Col>
                                        <Col>
                                        <p className="texto_data">{quest.data_inicio}</p>
                                        </Col>
                                        <Col className="sla" xs={3}>
                                        <img src={Star} alt='pontos'className='estrelinha espaco2'/>
                                        <p className="texto_data">{quest.pontuacao}</p>
                                        </Col>
                                    </Row>
                                   
                                    
                                
                               
                            </Card.Body>

                            </Card>
                        </Carousel.Item> 
                        ))}
                    </Carousel>
               </Col>
             </Row>
            </Container>
        </div>
    )
}

export default Forms