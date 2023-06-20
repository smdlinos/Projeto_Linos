import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useFetch} from "../../hooks/useFetch";
import "../Tela.css"
import { useState , useEffect } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Form2 = (props) => {   

    const [interesse, setInteresse] = useState([]);

    const submitInteresse = () => {
        props.interesses(interesse);
    }

    console.log(interesse)

    return <>
            <h2 className="titulo_login">Quais seus interesses?</h2>
            <p className="text-align">Essas informações vão nos ajudar a deixar o quest mais sua cara!</p>
            <Form.Group className="mb-2">
                
                <div className="form-check">
                    {props.temas && props.temas.map((tema) => (
                        <ToggleButtonGroup type="checkbox" className="mb-2" key={tema.id_tema}>
                            <ToggleButton     
                                    className="mb-2"
                                    id={tema.id_tema}
                                    type="checkbox"
                                    variant="outline-primary"
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
                                    {tema.tema}
                                </ToggleButton>

                        </ToggleButtonGroup>
                            
                        
                    ))}
                

    
                    </div>
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit" onClick={submitInteresse} className="px-5 mb-3 mt-3 botao">
            FINALIZAR CADASTRO
            </Button>   
    </>
}

export default Form2;