import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"
import Header from "../Header.js";

export default function ConfirmCode (props){
    return (
      <>
        <h2 className="text-muted">Verifique o seu email</h2>
        <br/>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="codigo">Digite seu código</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Insira aqui" 
          className="" 
          name = "codigo"
          onChange={props.code}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.send} className="px-5 mb-3 mt-3">
          Validar Código
        </Button>
        <br />
        </>
      )
}