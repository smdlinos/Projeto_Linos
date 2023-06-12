import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Tela.css"
import Header from "../Header.js";

export default function SendEmail (props){


    return  <>           
            <h2 className="text-muted">Digite seu email para sabermos quem é você</h2>
            <br/>

            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Insira aqui" 
              className="" 
              name = "email"
              onChange={props.email}
              />
            </Form.Group>

          <Button variant="primary" type="button" onClick={props.send} className="px-5 mb-3 mt-3">
            Verificar
          </Button>
           <br />
           </>
}