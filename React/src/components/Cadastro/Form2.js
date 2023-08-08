//Styles
import "../Tela.css"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Etiqueta from "../imagens/etiqueta.svg";

//Dependences
import {useFetch} from "../../hooks/useFetch";
import { useState , useEffect } from "react";



const Form2 = (props) => {

    const [interesse, setInteresse] = useState([]);

    const submitInteresse = () => {
        props.interesses(interesse);
    }

    return <>
    <div className="font_popover">

            <h2 className="titulo_login">Quais seus interesses?</h2>
            <p className="">Essas informações vão nos ajudar<br/> a deixar o quests mais sua cara!</p>
            
            
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
            <br/>
            <Button variant="primary" type="submit" onClick={submitInteresse} className="px-5 mb-3 mt-3 botao">
            FINALIZAR CADASTRO
            </Button>   
            </div>
    </>
}

export default Form2;