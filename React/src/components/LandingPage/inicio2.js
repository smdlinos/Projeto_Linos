import adesivoQuests from "../imagens/adesivoQuests.svg"; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import caminhos_passos from "../imagens/Passos.png"; 
import Container from "react-bootstrap/esm/Container";
import Logo from "../imagens/quest_logo.png"
import Ticiane from "../imagens/Ticiane.png";
import Sobrepor from "../imagens/background_azul.png";
import Celula from "../imagens/celula.png";
import Luis from "../imagens/luis.png";
import Mickael from "../imagens/mickael.png";
import Letinepo from "../imagens/letinepo.png";
import Vitoria from "../imagens/vitoria.png";
import Macla from "../imagens/maria_clara.png";
import Vitao from "../imagens/vitao.png";
import Insta from "../imagens/insta.svg";
import Email from "../imagens/email.svg";
import Lupa from "../imagens/lupa_quest.png";
import Background from "../imagens/background_cliente.svg"
import Footer from "../Global/Footer"
import Background_Desk from "../imagens/tela_desktop.svg"

const Inicio2 = () => {
    return (
    <div className='landing_page pb-3 background_land_'>


        <a id="inicio"></a>
        
        <Row className='pt-4 pb-3 '>
            <Col className="m-auto">
                <img src={adesivoQuests} className="pb-3 img-fluid"></img>
            </Col>
        </Row>
        <Row className="">
            <Col className=''>
                <h1 className='pb-2 titulo_land2 alinhamento'>A melhor maneira de responder questionários!</h1>
                </Col>
                <Col className="pb-3" xs={12}>
                <p className='text_land_desc2 alinhamento pt-4 pb-3'>
                    Já pensou se fosse possível receber <strong>horas complementares</strong> ao responder questionários online? Com o <strong>Quests</strong>, isso acaba de se tornar realidade!
                </p>
                </Col>
        </Row>

        <Row>
            <Col>
            
            </Col>
        </Row>


        <a id="aventure-se"></a>
        <div>
            <Row className='pt-5 pb-3 sobreposicao_desc'>
            {/* <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p> 
             ajeitar isso */}
                <Col xs ={5}></Col>
                <Col xs ={7} className='pt-4 '>
                <h1 className='  titulo_lina'>Entre nessa aventura!</h1>
                </Col>
                <div className="alinhamento">         
                <Col className="m-auto"> 
                    <p className='text_land_desc2 pb-2'>
                <b>Prepare-se para uma incrível jornada rumo à recompensas!</b><br/>
                </p>
                
                </Col>
                <Col>
                <p className='text_land_desc2 '>
                Embarque com a <b>Lina</b> e agarre o mapa de uma misteriosa floresta onde 
                você vai superar obstáculos e contar com a companhia de corajosos aliados 
                que estarão ao seu lado a cada passo. Não perca tempo, <b>vá em busca dos cobiçados
                prêmios que te aguardam!</b>
                </p>
                </Col>
                </div>
                {/*<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>*/}
            </Row>
        </div>



        <div>
        <a id=""></a>
            <Row>
                <h1 className=' pb-5 alinhamento titulo_land3 '>Quer ganhar prêmios?</h1>
            </Row>
            
            <Row className="sobreposicao_cliente">
                <img src={caminhos_passos} className="caminho"/>
            </Row>
             
           
            
        </div>
        

        <a id="origem"></a>
        <div>
            <Row className="">
            <h1 className='pt-5 pb-3 mt-5 alinhamento titulo_land3 px-5'>Idealizadora do Projeto:</h1>
            </Row>
            
            

            
            <Row className="background-ticiane ">
           
                <p className='pt-3 mt-5 alinhamento Titulo_Land'> 
                <br/>
                <br/>
                <br/>
                <br/>
                Ticiane Darin
                </p>
             </Row>
                <Row className="background-land-tici alinhamento">
                    <Row className="m-auto">
                        <Col>
                            <p className='text_land_desc2 alinhamento pt-2'>
                                Ticiane Darin é a professora que encabeçou conosco a ideia do projeto e ajudou 
                                no desenvolvimento para o sistema servir de apoio para o grupo de pesquisas <b>Célula Multimídia.</b>

                            </p>
                        </Col>
                    </Row>
                    <Row>
                         <Col className="pb-5" >
                            <img src={Celula} className="pt-3 ps-3 celula_logo"/>
                        </Col>
                        
                    </Row>

                </Row>
                
                <a id="sobre-nos"></a>
                <Row className="pb-5 mb-3">
                
                    <h1 className='pt-5 pb-3 alinhamento titulo_land3 px-5'>Nosso time:</h1>
                    <Col>
                    <img src={Luis} className="pt-3 ps-3 time"/>
                    </Col>
                    <Col>
                    <img src={Vitoria} className="pt-3 ps-3 time"/>
                    </Col>
                    <Col>
                    <img src={Letinepo} className="pt-3 ps-3 time"/>
                    </Col>
                    <Col>
                    <img src={Macla} className="pt-3 ps-3 time"/>
                    </Col>
                    <Col>
                    <img src={Mickael} className="pt-3 ps-3 time"/>
                    </Col>
                    <Col>
                    <img src={Vitao} className="pt-3 ps-3 time"/>
                    </Col>
                </Row>


                <a id="Contato"></a>
                <Row className="background-azul2">
                
                    <h1 className='pt-5  titulo_land_contato px-3 pb-3'>Quer falar com a gente? </h1>
                    <Col className="espacamento_contato">
                    <img src={Email} className="icone_contato pb-4"></img>
                    <p className="txt_contato ps-1">linosdesignsmd@gmail.com</p>           
                    </Col>
                    <Col className="espacamento_contato">
                    <img src={Insta} className="pb-4 icone_contato"></img><p className="txt_contato ps-1">@quests.linos</p>
                    </Col>
                    <Col className="m-auto alinhamento" xs={12}>
                    <img src={Logo} className="lupa_contato pb-3 pt-2"></img>
                    </Col>
                    <Col className="pb-5">
                        <Button className="botao_inicio" href="/login">Fazer Login</Button>
                    </Col>
                </Row>
            
        </div>
        
        
        

    </div>
    )
}

export default Inicio2;