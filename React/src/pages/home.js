import "../components/Tela.css"
import Forms from "../components/Forms";
import Tabletop from "../components/Tabletop";
import SearchForm from "../components/SearchForm";
import HeaderHome from "../components/HeaderHome";
import Button from "react-bootstrap/Button";

import {useNavigate} from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/AuthContext';

import CustomRoute from '../CustomRoute';

export default function Home(){

    const { authenticated, handleLogout} = useContext(Context);
  
    console.log(authenticated);
    return(
        <div className="background">
            <HeaderHome/>
            <main className="">
                <Tabletop/>
                <h5 className='pb-3'>
                Questionários Recomendados
                </h5>
                <Forms/>
                <h5 className='pb-3 pt-5'>
                Todos os Questionários
                </h5>
                <Forms />
                <Button variant="primary" type="button"  onClick={handleLogout} className="px-5 mb-3 mt-3">
                    Logout
                </Button>
            </main>
        </div> 
    )

}
