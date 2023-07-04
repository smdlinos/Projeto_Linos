//Sty;es
import "../components/Tela.css"
import Button from "react-bootstrap/Button";

//Components
import Forms from "../components/Home/Forms";
import Tabletop from "../components/Home/Tabletop";
import SearchForm from "../components/Home/SearchForm";
import HeaderHome from "../components/Home/HeaderHome";

//Dependences
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AuthContext';

//Endpoints
const urlRecomendedQuests = "https://smdquests.000webhostapp.com/api/quests/recomended";
const urlAllQuests = "https://smdquests.000webhostapp.com/api/quests";

import { api } from '../services/api';

export default function Home(){


    const { authenticated, handleLogout, loading} = useContext(Context);

    const [recomendados, setRecomendados] = useState();
    const [quests, setQuests] = useState();

    if(authenticated){
        useEffect(() => {
            async function handleRecomend() { // esse teste possivelmente deu certo
              const token = localStorage.getItem('token').replace(/["]/g, '');
              fetch(urlRecomendedQuests, {
                method: 'post',
                body: JSON.stringify({
                    token
                })
              }).then(function(response) {
                    return response.json();
              }).then(data => {
                    setRecomendados(data.recomendacoes);
                    setQuests(data.allquests)
              }).catch(error => {
                    // Lidar com erros
                    console.error(error);
              });
            }
            handleRecomend();
            
        }, []);

    } else  {
        
        useEffect(() =>{

            const token = localStorage.getItem('token');
             const teste = async () => {
                 const response = await axios.get(urlAllQuests, {
                }).then(function (response) {
                if(response.data){
                    setQuests(response.data)
                };
                }).catch(function (error) {

                  console.log(error);

                });
             }
             teste();
        },[]);
    }

    return(
        <div className="background_config">
            <HeaderHome/>
            <main className="fonte_login">
                <a href="/tabletop" className="alinhamento"><Tabletop/></a>
                {authenticated &&
                <>
                <h3 className='pb-3 titulo_login alinhamento'>
                    Questionários Recomendados
                </h3>
                 <Forms quests={recomendados} />
                </>
                }
                <h3 className='pb-3 pt-5 titulo_login alinhamento'>
                Todos os Questionários
                </h3>
                 <Forms quests={quests}/>
            </main>
        </div> 
    )

}
