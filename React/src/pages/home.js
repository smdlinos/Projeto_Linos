import "../components/Tela.css"
import Forms from "../components/Forms";
import Tabletop from "../components/Tabletop";
import SearchForm from "../components/SearchForm";
import HeaderHome from "../components/HeaderHome";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const urlRecomendedQuests = "http://localhost/api/quests/recomended";

const urlAllQuests = "http://localhost/api/quests";


import {useNavigate} from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/AuthContext';

export default function Home(){

    const { authenticated, handleLogout, loading} = useContext(Context);
    

    const [recomendados, setRecomendados] = useState();
    const [quests, setQuests] = useState();

    if(authenticated){
        useEffect(() =>{

        const token = localStorage.getItem('token');
         const teste = async () => {
             const response = await axios.get(urlRecomendedQuests, {
            }).then(function (response) {
            if(response.data){
                setRecomendados(response.data.recomendacoes);
                setQuests(response.data.allquests)
            };
            }).catch(function (error) {

              console.log(error);

            });
         }
         teste();
        },[]);

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
        <div className="background alinhamento">
            <HeaderHome/>
            <main className="fonte_login">
                <a href="/tabletop"><Tabletop/></a>
                {authenticated &&
                <>
                <h3 className='pb-3 titulo_login'>
                    Questionários Recomendados
                </h3>
                 <Forms quests={recomendados} />
                </>
                }
                <h3 className='pb-3 pt-5 titulo_login'>
                Todos os Questionários
                </h3>
                 <Forms quests={quests}/>
            </main>
        </div> 
    )

}
