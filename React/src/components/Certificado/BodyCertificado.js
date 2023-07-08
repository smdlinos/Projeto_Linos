//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import horas from "../imagens/horas.svg"
import Button from "react-bootstrap/esm/Button";
import Popover from "./CardCertificado";

import Logo from "../imagens/quest_logo.png"
import PdfButton from "./PdfButton";
import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../../context/AuthContext';

export default function BodyCertificado() {

  const { authenticated, user } = useContext(Context);

  return (
    <div className="background_land">
      <Container className="mb-4 px-4">
        <Row>
          <Col className="mt-4" xs={10}>
           <h3 className="titulo_login ">Certficados de horas de atividades complementares</h3>
           
          </Col>
          <Col xs={2} className="pt-5 ps-1">
          <Popover/>
          </Col>
        </Row>
        <Row>
            <Col>
            <p className="fonte_login pe-4 pt-4"> 
                Olha só o quanto você acumulou de horas complementares ao ajudar 
                a pesquisa acadêmica!
            </p>
            </Col>
        </Row>
        <Row className="div_horas pb-3">
          <img src={horas} alt="logo" className="rounded mx-auto d-block horas"/>
            <Col className="texto_horas">
            <p><b>{user && user.tabletop[0].ch} HORAS TOTAIS</b></p>
            </Col>
        </Row>
        <Row className="mt-5 pb-3">
            { user && parseInt(user.tabletop[0].ch) > 0 ?
            <>
              <Col xs={12} className="mt-5 pb-3">
                <h6 className="fonte_login alinhamento mt-5">
                  <b>Quer resgatar seu certificado? <br/>Não perca tempo!</b>
                </h6>
                <h6 className="fonte_login alinhamento mt-5">
                  <strong>ATENÇÃO:</strong> ao gerar um certificado suas horas serão resetadas no nosso sitema,
                  portanto guarde bem o(s) seu(s) certificado(s), pois o resgate do(s) mesmo(s) será único. 
                </h6>
              </Col>
              <Col>
                <PdfButton user={user.user.name} ch={user.tabletop[0].ch} />
              </Col>
            </>
            :
            <>
            <h6 className="fonte_login alinhamento mt-5">
              <b>Você precisa ter mais de 1 hora acumuladas para resgatar um certificado :(</b>
            </h6>
            <Col className="pt-3">
              <button disabled className='botao botao_pdf p-2 botao_disable'>Gerar PDF</button>
            </Col>
            </>
            }

        </Row>

      </Container>
    </div>
  );
}
