import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import caminhos_passos from "../imagens/caminhos_passos.svg"; 

const Passos = () => {
    return (
        <div className='px-5'>
            <Row>
                <h1 className='pt-5 pb-3 alinhamento titulo_land'>Quer ganhar prêmios?</h1>
                <img src={caminhos_passos}/>
            </Row>
        </div>
    )
}

export default Passos;