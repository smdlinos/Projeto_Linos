import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import logo_celula from '../imagens/logo_celula.svg'
import Background_Desk from "../imagens/tela_desktop.svg"

const ImagemDesktop = () => {
    return (
        <div >
            <Row className='background_desktop_'>
            <img src={Background_Desk} className=" img-fluid"></img>
            </Row>
        </div>
    )
}

export default ImagemDesktop;