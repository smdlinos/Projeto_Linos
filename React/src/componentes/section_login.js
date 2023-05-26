import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Section_login() {
  return (
    <div>
      <Row className="justify-content-sm-center">
        <Col sm="auto" none="">
          <Form className="mb-4 rounded p-5 mx-3">
            <h2>Seja bem vindo</h2>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control type="email" placeholder="E-mail" className="" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Sua senha" />
            </Form.Group>
                
            <a href="#" className="text-muted"><small>Esqueci a senha</small></a>
            
            <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
              Login
            </Button>
            <br />
            <a href="#"> Ou entre como visitante</a>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
