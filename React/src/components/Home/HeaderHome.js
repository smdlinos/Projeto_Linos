//Styles
import "../Tela.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import lupa from "../imagens/lupa2.svg";
import perfil from "../imagens/noto_lion.png";
import estrela from "../imagens/estrela2.svg";
import logo from "../imagens/logo_quest.svg";

import OverlayPerfil from "./OverlayPerfil";

//Dependences
import React, { useContext} from 'react';
import { Context } from '../../context/AuthContext';
 

export default function HeaderHome() {

  const { authenticated, user} = useContext(Context);

  return (
    <div className="background_header">
      <Container className="mb-4 ">
        <Row className="alihamneto mt-3">
          <Col className="mt-4">
            <img src={lupa}
            alt="lupa" className="pt-2 pe-5"/>
          </Col>
          <Col className=" titulo pe-1">
          <img src={logo} alt="logo" className="mt-4 quest_logo_q"/>
          </Col>
          <Col className="mt-3 itens ">
          {authenticated && 
            <Stack direction="horizontal"  className="pt-1">  
              <img src={estrela} alt="estrela" className="estrela"/>
           {user && <p className="pt-2 pontos ps-1 font_t">{user.user.pontos}</p> }
              <OverlayPerfil/>
            </Stack>
            }
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
