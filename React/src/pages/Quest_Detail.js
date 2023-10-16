//Styles
import "../components/Tela.css"


//Components
import Footer from "../components/Global/Footer";
import Logo from "../components/imagens/quest_logo.png";
import Titulo_q from "../components/Quests/Modal_q";
import Body_q from "../components/Quests/Body_q";
import Header_q from "../components/Quests/Header_q";

//Dependences
import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AuthContext';


function Quest_D (){

    const { authenticated } = useContext(Context);

    const { id } = useParams();

    const [quest, setQuest] = useState();
    const [loading, setLoading] = useState(true);
    const [page404, setPage404] = useState(false);

    const url = 'https://smdquests.000webhostapp.com/api/quests/'+id;

    useEffect(() =>{
        async function getQuest() { // esse teste possivelmente deu certo
 
           fetch(url, {
             method: 'get'
           }).then(function(response) {
                 return response.json();
           }).then(data => {
                 setQuest(data)
           }).catch(error => {
                 // Lidar com erros
                 setPage404(true);
                 setLoading(false);
                 console.error(error);
           });
 
         }
         getQuest();
          
     },[]);

    useEffect((e) => {
        if(quest != undefined){
        setLoading(false);
        }
    }, [quest])

    return(
        <div className="">
            <Header_q/>
            <main>
            {loading ? (<p>Carregando....</p>) : page404 ? <p>404 bro, questionário não encontrado</p> :
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