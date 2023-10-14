//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabuleiro from '../imagens/tabuleiro_1.png';
import "../Tela.css"


function Tabletop(){
    return(
        <div>
         <div>
            <Row>
             <Col className='justify-content-start'>
                    {/* <h3 className="titulo_login">
                    Meu tabuleiro
                 </h3> */}
             </Col>            
            </Row>
        
            <img src={Tabuleiro} alt='tabuleiro' className='tabuleiro pb-5'/>
         </div>
        </div>
    )
}
export default Tabletop