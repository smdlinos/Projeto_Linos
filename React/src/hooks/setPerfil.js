import {useState, useEffect} from 'react';

import Leao_ from "./imagensPerfil/PerfilLiaoMax.svg"
import Passaro_ from "./imagensPerfil/PerfilPassarinMax.svg"
import Tigre_ from "./imagensPerfil/PerfilTigreMax.svg"
import Urso_ from "./imagensPerfil/PerfilUrsoMax.svg"
import Pinguin_ from "./imagensPerfil/PerfilPingaoMax.svg"
import Koala_ from "./imagensPerfil/PerfilKoala.svg"
import Leao from "./imagensPerfil/PerfilLiao (1).svg"
import Passaro from "./imagensPerfil/PerfilPassarin (1).svg"
import Tigre from "./imagensPerfil/PerfilTigre (1).svg"
import Urso from "./imagensPerfil/PerfilUrso (1).svg"
import Pinguin from "./imagensPerfil/PerfilPingao (1).svg"
import Koala from "./imagensPerfil/PerfilKoala (1).svg"


export const setPerfil = (custom) => {

    const [config, setConfig] = useState(custom);


    const perfil = (x) => {
        switch (x) {
          case '1':
            return  Koala;
            break;

          case '2':
            return  Urso_;
            break;
          case '3':
            
            return  Tigre_ ;
            break;
          case '4':
            
            return  Leao_ ;
            break;
          case '5':
        
            return  Passaro_ ;
            break;
          case '6':
        
            return  Pinguin_ ;
            break;
          default:
            
            return  Koala_ ;
            break;
        }
    }


    const perfil2 = (x) => {
        switch (x) {
          case '1':
              
            return  Koala;
            break;
          case '2':
            
            return  Urso;
            break;
          case '3':
        
            return  Tigre ;
            break;
          case '4':
            
            return  Leao ;
            break;
          case '5':
            
            return  Passaro ;
            break;
          case '6':
            
            return  Pinguin ;
            break;
          default:
            
            return  Koala ;
            break;
        }
    }



    return {Leao_, Passaro_, Tigre_, Urso_, Pinguin_, Koala_,Leao_, Leao,
    Passaro, Tigre, Urso, Pinguin, Koala, config, perfil, perfil2};
}
