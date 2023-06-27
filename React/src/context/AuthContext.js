import axios from 'axios';
const url = "http://localhost/api/login";
const urlUser = "http://localhost/api/user/auth";
import {useFetch} from "../hooks/useFetch";

const Context = createContext();

import { useNavigate} from "react-router-dom";

import React, { createContext, useState, useEffect } from 'react';

function AuthProvider({ children }){



	//const { data:temas} = useFetch(url);	

	const [authenticated, setAuthenticated] = useState(false);
	const [login, setLogin] = useState();
  	const [password, setPassword] = useState();
  	const [loading, setLoading] = useState(true);
	const [user , setUser] = useState(null);
  	const navigate = useNavigate();

  	useEffect(() =>{
  		const token = localStorage.getItem('token');
 
  		if(token && token != 'undefined' && token != undefined){
  			axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
  			setAuthenticated(true);
			getUser();
  		}
  		setLoading(false);
  	},[]);

	async function handleLogin(e){
		e.preventDefault();
		let token;
		const response = await axios.post(url, {
	        login, 
	        password, 
	    }).then(function (response) {
	    	if(response.data){
	    		token = response.data;
	       		localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				setAuthenticated(true);
				getUser();
				navigate('/home/'+token);
	    	}
	       	
	      }).catch(function (error) {

	        console.log(error);

	      });
	}

	async function getUser(){
		const token = localStorage.getItem('token');
		const response = await axios.get(urlUser, {
	    }).then(function (response) {
	    	if(response.data){
	    		setUser(response.data);
	    	}
	      }).catch(function (error) {

	        console.log(error);

	      });
	}

	// async function handleLogin(e){
	// 	e.preventDefault();
	// 	let token; 

	//  	fetch(url, {
	// 		  method: 'POST',
	// 		  headers: {
	// 		    'Content-Type': 'application/json'
	// 		  },
	// 		  body: JSON.stringify({
	// 		    login,
	// 		    password
	// 		  })
	// 		}).then(response => {
	// 		  	response.json()
	// 		  	console.log(response);
	// 		  }).catch(error => {
	// 		    // Lidar com erros
	// 		    console.error(error);
	// 		  });

	// }

	function handleLogout(e){
		e.preventDefault();
		localStorage.removeItem('token');
		axios.defaults.headers.common['Authorization'] = undefined;
		setUser(null);
		setAuthenticated(false);
		navigate('/');
	}

	if (loading) {
		return <h1>loading.....</h1>;
	}




	return(
		<Context.Provider value={{ authenticated, handleLogin, setLogin, setPassword, handleLogout, setAuthenticated, user}}>
			{children}
		</Context.Provider>
		);
}

export { Context, AuthProvider };