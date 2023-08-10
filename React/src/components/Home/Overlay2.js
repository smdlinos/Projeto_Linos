import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import estrela from "../imagens/estrela2.svg";
import Icon_P from "../imagens/historico_icon.svg"
import Icon_H from "../imagens/certificado_icon.svg"
import Icon_C from "../imagens/config_icon.svg"
import Logout_Icon from "../imagens/logout_icone.svg"
import { setPerfil } from '../../hooks/setPerfil';

import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/AuthContext';

function OffCanvasExample({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div className='pb-2'>
      <Button variant="link" onClick={handleShow} className="me-2 mb-2 ps-2 pb-2">
      {user && <img src={perfil2(user.user.custom)} alt='perfil' className=''></img>}
      </Button>
      </div>
      
      <Offcanvas show={show} onHide={handleClose} placement={name} className="background_header">
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Nav className="justify-content-center flex-grow-1 pe-3 mb-5 pb-5 ">
                    <div className='m-auto pontos_p mb-3'>
                    <img src={estrela} alt='estrelinha' className='estrela_p'/>
                    {user && <p className='my-1 mx-1 font_p'><b>{user.user.pontos}</b></p>}
                    </div>
                    { user &&<img src={perfil(user.user.custom)} alt='perfil_g' className=' mx-5 perfil_g'/>}
                    {user && <p className='pt-3 texto_off pb-2'><center><b>@{user.user.nickname}</b></center></p>}
                    <Nav.Link href="/user/historico"><Button className='botao_overlay' size='lg'><img src={Icon_P} alt='icone' className='px-2 icones'></img>HISTÓRICO</Button></Nav.Link>
                    <Nav.Link href="/certificado"><Button className='botao_overlay' size='lg'><img src={Icon_H} alt='icone' className='px-2 icones' ></img>CERTIFICADOS</Button></Nav.Link>
                    <Nav.Link href="/config" className=''><Button className='botao_overlay' size='lg'><img src={Icon_C} alt='icone' className='px-2 icones'></img>CONFIGURAÇÕES</Button></Nav.Link>
                  </Nav>

                  {authenticated && <Button variant="link" type="button"  onClick={handleLogout} className="link m-auto logout" size='lg'>
                    
                    <img src={Logout_Icon} alt="icone_sair" className='icones_l'></img><b>SAIR</b>
                    
                    
                    
                    
                </Button> 
}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;

