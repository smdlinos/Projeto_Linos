import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/Tela.css"
import Carousel from 'react-bootstrap/Carousel';
import estrela from "../components/imagens/estrela.svg";
import { BrowserRouter , Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";



function Forms(props){
    const navigate = useNavigate();
    
    function acttion(e){
        e.preventDefault();
        navigate("/quest_d/"+e.target.id);
    }

    return(
        <div>
            <Container>
                    <Row >
                    <Col md="auto">  
                        <Carousel >
                        {props.quests && props.quests.map((quest) => (
                            <Carousel.Item key={quest.id_questionario}>
                                <Card    
                                    onClick={(e)=>navigate("/quest_d/"+quest.id_questionario)}
                                    id = {quest.id_questionario}
                                    style={{ width: '23rem' }}
                                    className="mb-2 m-auto card bg-dark"
                                >
                                <Card.Body >
                                    <Card.Title >{quest.titulo}</Card.Title>
                                    <Card.Text>
                                        <small>{quest.autor}</small><br/>
                                        <small>{quest.instituicao}</small><br/>
                                        {quest.descricao}
                                        <br/>
                                        <img src={estrela} alt='pontos'className='estrelinha'/>
                                        {quest.pontuacao} - Postado em {quest.data_inicio}
                                    </Card.Text>
                                    <br/>
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