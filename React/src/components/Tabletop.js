import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabuleiro from '../components/imagens/tabuleiro_1.svg';
import "../components/Tela.css"
function Tabletop(){
    return(
        <div>
            <div>
                <Row>
                    <Col justify-content-start>
                    <h5>
                    Meu tabuleiro
                 </h5>
                    </Col>
                
                </Row>
                
                <img src={Tabuleiro} alt='tabuleiro' className='tabuleiro pb-5'/>
            </div>
        </div>
    )
}
export default Tabletop