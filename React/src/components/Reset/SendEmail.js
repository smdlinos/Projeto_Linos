//Styles
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"

export default function SendEmail (props){


    return  <>           
            <h1 className="titulo_login">Esqueceu sua senha?</h1>
            <p>Insira seu email para redefinir sua senha.</p>
          

            <Form.Group className="mb-2 pt-2">
              <Form.Label htmlFor="email" className="nickname">Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Insira aqui" 
              className="" 
              name = "email"
              onChange={props.email}
              />
            </Form.Group>

          <Button variant="primary" type="button" onClick={props.send} className="px-5 mb-4 mt-3 botao">
            Próximo
          </Button>
           <br />
           <a href="/login" className="text-muted alinhamento"><p>Ou faça login</p></a>
           </>
}