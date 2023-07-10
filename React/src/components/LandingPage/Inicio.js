import adesivoQuests from "../imagens/adesivoQuests.svg"; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const Inicio = () => {
    return (
    <div className='ps-5 pb-3'>
        <Row className='pt-5 pb-3'>
            <Col className='pt-5'>
                <h1 className='pt-5 titulo_land'>A melhor maneira de responder questionários</h1>
                <p className='text_land'>
                    Já pensou se fosse possível receber <strong>horas complementares</strong> ao responder questionários online? Com o <strong>Quests</strong>, isso acaba de se tornar realidade!
                </p>
                <Button className="botao_inicio" href="/register">CADASTRE-SE JÁ</Button>
            </Col>
            <Col>
                <img src={adesivoQuests} className="pb-3 img-fluid"></img>
            </Col>
        </Row>
    </div>
    )
}

export default Inicio;