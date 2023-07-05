//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tela from "../Tela.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import React, { useContext, useEffect, useState } from 'react';



import Logo from "../imagens/quest_logo.png"


export default function Modal_Interesse(props) {
    const [modalShow, setModalShow] = React.useState(false);
    //const [password1, setPassword1] = useState(1);

    const [value, setValue] = useState([1, 3]);

    const handleChange = (val) => setValue(val);

    const [interesse, setInteresse] = useState([]);

    const submitInteresse = () => {
        props.interesses(interesse);
    }


    
  return (
    <div className="font_t">
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4 className="alinhamento titulo_login">Redefinir seus Interesses</h4>

        <div className="alinhamento">
        
        <Form.Group className="mb-2">
                
                {props.temas && props.temas.map((tema) => (
                    <ToggleButtonGroup  type="checkbox" className="mb-2 interesses" key={tema.id_tema} orientation="vertical">
                        
                        <ToggleButton 
                                className="mb-2 etiqueta_int"
                                id={tema.id_tema}
                                type="checkbox"
                                variant=""
                                checked={interesse.includes(tema.tema)}
                                name={tema.tema}
                                value={tema.tema}
                                onChange={(e) => {
                                    if (e.target.checked) { // add
                                        setInteresse([
                                        ...interesse, e.target.value
                                        ]);
                                    }else { // delete
                                        setInteresse(
                                        interesse.filter(x => 
                                            x !== e.target.value
                                        ))
                                    }
                                    }}  
                            >
                                
                                   <img src={Etiqueta} alt="etiqueta"/> {tema.tema}
                                    
                                
                            </ToggleButton>
                    
                    </ToggleButtonGroup>
                        
                    
                ))}
              
        </Form.Group>


        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="botao">SALVAR ALTERAÇÕES</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}