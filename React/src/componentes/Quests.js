import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentes/Tela.css"
import Carousel from 'react-bootstrap/Carousel';
import estrela from "../componentes/imagens/estrela.svg";



function Quests(){
    return(
        <div>
            <Container>
                <Row className=''>
                    
            
            <Carousel>
            <Carousel.Item>

           
            <Card       
                    style={{ width: '23rem' }}
                    className="mb-2 m-auto card"
                    
                    >
                
                <Card.Body>
                    <Card.Title>Título do Questionário</Card.Title>
                    <Card.Text>
                        <small>Nome do autor</small><br/>
                        <small>Instituição</small><br/>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.<br/>
                    <img src={estrela} alt='pontos'className='estrelinha'/>
                    60 - Postado em 30/01/2023
                    </Card.Text>
                    <br/>
                </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card       
                    style={{ width: '23rem' }}
                    className="mb-2 m-auto"
                    >
                
                <Card.Body>
                    <Card.Title>Título do Questionário</Card.Title>
                    <Card.Text>
                        <small>Nome do autor</small><br/>
                        <small>Instituição</small><br/>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.<br/>
                    <img src={estrela} alt='pontos' className='estrelinha'/>
                    60 - Postado em 30/01/2023
                    </Card.Text>
                    <br/>
                </Card.Body>
                </Card>

            </Carousel.Item>
            <Carousel.Item>
            <Card       
                    style={{ width: '23rem' }}
                    className="mb-2 m-auto"
                    >
               
                <Card.Body>
                    <Card.Title>Título do Questionário</Card.Title>
                    <Card.Text>
                        <small>Nome do autor</small><br/>
                        <small>Instituição</small><br/>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.<br/>
                    <img src={estrela} alt='pontos' className='estrelinha'/>
                    60 - Postado em 30/01/2023
                    </Card.Text>
                    <br/>
                </Card.Body>
                </Card>
               
      </Carousel.Item>
    </Carousel>

            <Col md="auto">
            
        </Col>
        </Row>
        </Container>
        </div>
    )
}
export default Quests