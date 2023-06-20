import "../components/Tela.css"
import Forms from "../components/Forms";
import Tabletop from "../components/Tabletop";
import SearchForm from "../components/SearchForm";
import HeaderHome from "../components/HeaderHome";
import Button from "react-bootstrap/Button";
import axios from 'axios';
const urlTest = "http://localhost/quests/login/auth";
const urlQ = "http://localhost/quests/users/quests";
import {useNavigate} from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/AuthContext';

export default function Home(){

    const { authenticated, handleLogout, loading} = useContext(Context);
    

    const [recomendados, setRecomendados] = useState();
    const [quests, setQuests] = useState();

    //Fake api - comenta os dois estados acima e as linhas 46 e 47 beijos

//     const recomendados = [
// {id_questionario: '1', titulo: 'UX Resarch Quests', autor: 'Linos Design da Silva', instituicao: 'UFC', data_inicio: '2023-05-22', …},
// {id_questionario: '2', titulo: 'Análise de Necessidades Quests', autor: 'Teste Bittencourt', instituicao: 'UFC', data_inicio: '2023-05-23', …}, 
// {id_questionario: '4', titulo: 'Teste de Usabilidade', autor: 'Luiz Gonzaga', instituicao: 'UFC', data_inicio: '2023-06-07', …}
//  ]

//     const quests = [
//         {id_questionario: '1', titulo: 'UX Resarch Quests', autor: 'Linos Design da Silva', instituicao: 'UFC', data_inicio: '2023-05-22', …},
// {id_questionario: '2', titulo: 'Análise de Necessidades Quests', autor: 'Teste Bittencourt', instituicao: 'UFC', data_inicio: '2023-05-23', …},
// {id_questionario: '3', titulo: 'Nível de Satisfação RU', autor: 'Vitorinha do Papoco', instituicao: 'UFC', data_inicio: '2023-06-09', …}, 
// {id_questionario: '4', titulo: 'Teste de Usabilidade', autor: 'Luiz Gonzaga', instituicao: 'UFC', data_inicio: '2023-06-07', …}
//   ]

    if(authenticated){
        useEffect(() =>{

        const token = localStorage.getItem('token');
         const teste = async () => {
             const response = await axios.get(urlTest, {
            }).then(function (response) {
            if(response.data){
                setRecomendados(response.data.recomendacoes[2]);
                setQuests(response.data.recomendacoes[1])
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
             const response = await axios.get(urlQ, {
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
        <div className="background">
            <HeaderHome/>
            <main className="fonte_login">
                <Tabletop/>
                <h3 className='pb-3 titulo_login'>
                    Questionários Recomendados
                </h3>
                {authenticated && <Forms quests={recomendados} />}
                <h3 className='pb-3 pt-5 titulo_login'>
                Todos os Questionários
                </h3>
                 <Forms quests={quests}/>
            </main>
        </div> 
    )

}
