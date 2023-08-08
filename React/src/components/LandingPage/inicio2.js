import adesivoQuests from "../imagens/adesivoQuests.svg"; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import caminhos_passos from "../imagens/Novo_Caminho2.svg"; 
import Container from "react-bootstrap/esm/Container";

const Inicio2 = () => {
    return (
    <div className=' pb-3'>
        <Row className='pt-4 pb-3'>
            <Col className="m-auto">
                <img src={adesivoQuests} className="pb-3 img-fluid"></img>
            </Col>
            </Row>
            <Row>
            <Col className=''>
                <h1 className='pb-2 titulo_land2 alinhamento'>A melhor maneira de responder questionários</h1>
                </Col>
                <Col className="pb-3" xs={12}>
                <p className='text_land2'>
                    Já pensou se fosse possível receber <strong>horas complementares</strong> ao responder questionários online? Com o <strong>Quests</strong>, isso acaba de se tornar realidade!
                </p>
                </Col>
                
            
        </Row>

        <Row>
            <Col>
            
            </Col>
        </Row>

        <div>
            <Row className='pt-5 pb-3 sobreposicao_desc'>
            {/* <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p> 
             ajeitar isso */}
                <Col xs ={5}></Col>
                <Col xs ={7} className='pt-4 pb-5'>
                <h1 className=' pb-3 titulo_land_desc2'>Entre nessa aventura!</h1>
                </Col>
                <div className="alinhamento">         
                <Col className="m-auto"> 
                    <p className='text_land_desc2 pb-2'>
                <b>Prepare-se para uma incrível jornada rumo à recompensas!</b><br/>
                </p>
                
                </Col>
                <Col>
                <p className='text_land_desc2 '>
                Embarque com a Lina e agarre o mapa de uma misteriosa floresta onde 
                você vai superar obstáculos e contar com a companhia de corajosos aliados 
                que estarão ao seu lado a cada passo. Não perca tempo, vá em busca dos cobiçados
                prêmios que te aguardam!
                </p>
                </Col>
                </div>
                {/*<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>*/}
            </Row>
        </div>



        <div >
            
            <Row>
            <h1 className='pt-5 pb-5 alinhamento titulo_land3 px-5'>Quer ganhar prêmios?</h1>
            </Row>
            
            <Row className="sobreposicao_cliente">
            <img src={caminhos_passos} className="caminho"/>

            </Row>
            
                
            <Col className="pt-5 px-4">
                <Button className="botao_inicio" href="/login">CADASTRE-SE JÁ</Button>
            </Col>
            
        </div>
        
    </div>
    )
}

export default Inicio2;