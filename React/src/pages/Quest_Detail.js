import "../components/Tela.css"
import SessionLogin from "../components/SessionLogin";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Logo from "../components/imagens/quest_logo.png";
import Titulo_q from "../components/Titulo_q";
import Body_q from "../components/Body_q";
import Header_q from "../components/Header_q";

import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AuthContext';

const url = 'http://localhost/quests/quest';

function Quest_D (){

    const { authenticated } = useContext(Context);

    const { id } = useParams();

    const [quest, setQuest] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const teste = async () => {
            const response = await axios.post(url, {
                id
            }).then(function (response) {
            if(response.data){
                setQuest(response.data);
            };
            }).catch(function (error) {

              console.log(error);
              navigate('/login');

            });
         }
        teste();
         
    },[]);

    useEffect((e) => {
        if(quest != undefined){
        setLoading(false);
        }
    }, [quest])


    console.log(quest);
    return(
        <div className="background">
            <Header_q/>
            <main>
            {loading ? (<p>Carregando</p>) :
                <>
                <Titulo_q quest={quest}/> 
                <Body_q quest={quest} auth={authenticated}/>
                <Footer /> 
                 </>
            }
            </main>
           
        </div>
    )
}

export default Quest_D