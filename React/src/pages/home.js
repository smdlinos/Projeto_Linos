import "../components/Tela.css"
import Forms from "../components/Forms";
import Tabletop from "../components/Tabletop";
import SearchForm from "../components/SearchForm";
import HeaderHome from "../components/HeaderHome";
import Button from "react-bootstrap/Button";
import axios from 'axios';
const urlTest = "http://localhost/quests/login/auth";
import {useNavigate} from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/AuthContext';

import CustomRoute from '../CustomRoute';

export default function Home(){

    const { authenticated, handleLogout, loading} = useContext(Context);
    
    if(authenticated){
        useEffect(() =>{

        const token = localStorage.getItem('token');
         const teste = async () => {
             const response = await axios.get(urlTest, {
            }).then(function (response) {
            if(response.data){
              console.log(response.data);
            } 
            }).catch(function (error) {

              console.log(error);

            });
         }
         teste();
        },[]);
    }
    
    console.log(authenticated);
    return(
        <div className="background">
            <HeaderHome/>
            <main className="fonte_login">
                <Tabletop/>
                <h3 className='pb-3 titulo_login'>
                Questionários Recomendados
                </h3>
                <Forms/>
                <h3 className='pb-3 pt-5 titulo_login'>
                Todos os Questionários
                </h3>
                <Forms />
                <Button variant="primary" type="button"  onClick={handleLogout} className="px-5 mb-3 mt-3">
                    Logout
                </Button>
            </main>
        </div> 
    )

}
