import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useFetch} from "../../hooks/useFetch";
import "../Tela.css"
import { useState , useEffect } from "react";

const Form2 = (props) => {   

    const [interesse, setInteresse] = useState([]);

    const submitInteresse = () => {
        props.interesses(interesse);
    }

    return <>
            <h2>Escolha seus interesses</h2>
            <Form.Group className="mb-2">
                <div className="form-check">
                    <ul>
                    {props.temas && props.temas.map((tema) => (
                        <li key={tema.id_tema}>
                            <input className="form-check-input"
                            name={tema.tema}
                            value={tema.id_tema}
                            type="checkbox"
                            checked={interesse.includes(tema.tema)}
                            onChange={(e) => {
                                if (e.target.checked) { // add
                                    setInteresse([
                                    ...interesse, e.target.name
                                    ]);
                                }else { // delete
                                    setInteresse(
                                    interesse.filter(x => 
                                        x !== e.target.name
                                    ))
                                }
                                }}                
                            id="flexCheckDefault"/>

                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {tema.tema}
                            </label>
                        </li>
                    ))}
                    </ul>
                    </div>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit" onClick={submitInteresse} className="px-5 mb-3 mt-3">
            Enviar
            </Button>   
    </>
}

export default Form2;