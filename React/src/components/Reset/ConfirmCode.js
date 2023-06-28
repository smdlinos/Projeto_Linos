//Styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"

export default function ConfirmCode (props){
    return (
      <>
        <h1 className="titulo_login">Código enviado</h1>
        <p className="text-align">Verifique seu email e insira o código para prosseguir.</p>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="codigo" className="login_espacamento">Código</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Insira aqui" 
          className="" 
          name = "codigo"
          onChange={props.code}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.send} className="px-5 mb-3 mt-3 botao">
          PRÓXIMO
        </Button>
        <br />
        <a href="/login" className="text-muted alinhamento"><p>Ou faça login</p></a>
        </>
      )
}