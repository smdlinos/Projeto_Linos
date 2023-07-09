//Styles
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Tela.css";
import estrela from "../imagens/estrela2.svg";
import Icon_P from "../imagens/historico_icon.svg"
import Icon_H from "../imagens/certificado_icon.svg"
import Icon_C from "../imagens/config_icon.svg"
import Logout_Icon from "../imagens/logout_icone.svg"
import { setPerfil } from '../../hooks/setPerfil';


import Perfil from "../imagens/koala.svg";
import perfil_g from "../imagens/koala_p.svg";

//Dependeces
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';


function OverlayPerfil() {
  const { authenticated, handleLogout, loading, user} = useContext(Context);
  const {Leao_, Passaro_, Tigre_, Urso_, Pinguin_, Koala_, Leao,
    Passaro, Tigre, Urso, Pinguin, Koala, config, perfil, perfil2} = setPerfil("1")
    const [custom, setCustom] = useState(Koala);
    useEffect(()=> {
      if(loading==false){
        setCustom(perfil("2"))
      }
    }, [])
  return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid >
            
              <Navbar.Toggle variant="link" aria-controls={`offcanvasNavbar-expand-${expand}` } className='ms-auto '>
                {user && <img src={perfil2(user.user.custom)} alt='perfil' ></img>}
              </Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header className='background_header' closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                   
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="background_header">
                  <Nav className="justify-content-end flex-grow-1 pe-3 mb-5 pb-5">
                    <div className='m-auto pontos_p mb-3'>
                    <img src={estrela} alt='estrelinha' className='estrela_p'/>
                    {user && <p className='my-1 mx-1 font_p'>{user.user.pontos}</p>}
                    </div>
                    { user &&<img src={perfil(user.user.custom)} alt='perfil_g' className=' mx-5 perfil_g'/>}
                    {user && <h3 className='pt-3'><center>@{user.user.nickname}</center></h3>}
                    <Nav.Link href="/user/historico"><Button className='botao_overlay' size='lg'><img src={Icon_P} alt='icone' className='px-2 icones'></img>HISTÓRICO</Button></Nav.Link>
                    <Nav.Link href="/certificado"><Button className='botao_overlay' size='lg'><img src={Icon_H} alt='icone' className='px-2 icones' ></img>CERTIFICADOS</Button></Nav.Link>
                    <Nav.Link href="/config" className=''><Button className='botao_overlay' size='lg'><img src={Icon_C} alt='icone' className='px-2 icones'></img>CONFIGURAÇÕES</Button></Nav.Link>
                  </Nav>
                  {authenticated && <Button variant="link" type="button"  onClick={handleLogout} className="link m-auto logout" size='lg'>
                    
                    <img src={Logout_Icon} alt="icone_sair" className='icones_l'></img><b>SAIR</b>
                    
                    
                    
                    
                </Button> 
                }
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
  
  export default OverlayPerfil;