import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import logo_celula from '../imagens/logo_celula.svg'

const Cliente = () => {
    return (
        <div >
            <Row className='sobreposicao_cliente'>
            <Col xs ={7} className='ps-5 pt-5 pb-3'>
                <h1 className='pt-5 pb-3 titulo_land_cliente'>Idealizadora do projeto</h1>
                <p className='text_land_cliente pe-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p></Col>
                {/* <img src={logo_celula} className="pb-3 ms-auto img"/> */}
            <Col xs ={5}>
            <img src={tici} className="pb-3 img-fluid"/>
            </Col>
            </Row>
        </div>
    )
}

export default Cliente;