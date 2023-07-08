import React from "react"
import Button from "react-bootstrap/esm/Button";
import PlacasCert from "./PlacasCert";
import PlacasMasc from "./PlacasMasc";
import Casas from "./Casas";

//vem de fora pontos

function Boneca({boneca_pontos}){
    let boneca = { x: 10, y: 10, id: 0, estado: 'Default', pontos: 0}
    return(
        <div>
            <p></p>
            <Button > Mudar Koala </Button>
            <p></p>
            <Button > Mudar Urso </Button>
        </div>
    )
}

export default Boneca;