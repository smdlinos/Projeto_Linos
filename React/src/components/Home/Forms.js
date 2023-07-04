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
import Star from "../imagens/star_q.svg"

//Dependeces
import { useNavigate } from "react-router-dom";

function Forms(props){
    const navigate = useNavigate();
    


    return(
        <div>
            <Container>
              <Row >
               <Col className="mx-3 ">  
                    <Carousel >
                    {props.quests && props.quests.map((quest) => (
                        <Carousel.Item key={quest.id_questionario}>
                            <Card    
                                onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                id = {quest.id_questionario}
                                style={{ width: '23rem' }}
                                className="mb-2 card"
                            >
                            <Card.Body className="mx-4">
                                <Card.Title className="font_quests">{quest.titulo}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col xs={1} className="espaco_card">
                                        <img src={User} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.autor}</small>
                                        </Col>
                                    </Row>
                                    <Row className="pb-3">
                                        <Col xs={1}>
                                        <img src={House} alt="icon" className="cor_itens"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.instituicao}</small><br/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <small>{quest.descricao}</small>
                                        </Col>
                                    </Row>
                                    
                                    <br/>
                                    <Row className="pb-3">
                                       
                                        <Col xs={1}>
                                        <img src={Clock} alt="relogio"/>
                                        </Col>
                                        <Col>
                                        <small>{quest.data_inicio}</small>
                                        </Col>
                                        <Col>
                                        <img src={Star} alt='pontos'className='estrelinha'/>
                                        <small>{quest.pontuacao}</small>
                                        </Col>
                                    </Row>
                                   
                                    
                                </Card.Text>
                               
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