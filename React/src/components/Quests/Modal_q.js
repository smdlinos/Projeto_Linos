//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Logo from "../imagens/quest_logo.png"


export default function Modal_q(props) {
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body closeButton>
        <p className="quests_todos alinhamento">Tags Relacionadas!</p>
        <p className="font_t">
          As tags em amarelo representam quais são seus interesses relacionados com este questionário.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="botao">Legal!</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}