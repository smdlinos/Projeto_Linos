import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useFetch} from "../../hooks/useFetch";
import "../Tela.css"
import { useState , useEffect } from "react";

const Form2 = (props) => {   

    const [teste, setTeste] = useState([]);
    let temas = props.temas;
    let result = [];

    temas.forEach((tema, i) => {
        result[i] = tema;
    });

    console.log(teste, props.temas);
    return <>
            <h2>Escolha seus interesses</h2>
            <Form.Group className="mb-2"  onChange={props.interesses}>
                <div className="form-check">
                    <ul>
                    {props.temas && props.temas.map((tema) => (
                        <li key={tema.id_tema}>
                            <input className="form-check-input" onChange={(e) => setTeste(e.target.value)} name="form-check-input"  value={tema.tema} type="checkbox" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {tema.tema}
                            </label>
                        </li>
                    ))}
                    </ul>
                    </div>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit" className="px-5 mb-3 mt-3">
            Enviar
            </Button>   
    </>
}

export default Form2;