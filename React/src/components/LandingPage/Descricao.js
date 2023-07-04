import lina_desc from "../imagens/lina_desc.svg"; 
import fala_lina_desc from "../imagens/fala_lina_desc.svg"; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Descricao = () => {
    return (
        <div>
            <Row className='pt-5 pb-3 sobreposicao_desc'>
            {/* <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p> 
             ajeitar isso */}
                <Col xs ={5}></Col>
                <Col xs ={7} className='pt-5 pb-3'>
                <h1 className='pt-5 pb-3 titulo_land_desc'>Entre nessa aventura!</h1>
                <p className='text_land_desc pe-5'>
                Prepare-se para uma incrível jornada rumo à recompensas! Embarque com a Lina e agarre o mapa de uma misteriosa floresta onde você vai superar obstáculos e contar com a companhia de corajosos aliados que estarão ao seu lado a cada passo. Não perca tempo, vá em busca dos cobiçados prêmios que te aguardam!
                </p></Col>
                {/*<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>*/}
            </Row>
        </div>
    )
}

export default Descricao;