//Dependences
import axios from 'axios';
import { useNavigate, useLocation} from "react-router-dom";
import React, { createContext, useState, useEffect } from 'react';
const Context = createContext();
import Spinner from 'react-bootstrap/Spinner';

//Endpoints
const urlUser  = 'https://smdquests.000webhostapp.com/api/user/auth';
const urlLogin = 'https://smdquests.000webhostapp.com/api/login';

function AuthProvider({ children }){

	//const { data:temas} = useFetch(url);	

	const [authenticated, setAuthenticated] = useState(false);
	const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
	const [user , setUser] = useState(null);
  const navigate = useNavigate();
	const location = useLocation();


  useEffect(() =>{
		const token = localStorage.getItem('token');
		
		if(token && token != 'undefined' && token != undefined){
			axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
			handleUser();
		}

		setLoading(false);
		
	},[location.key]);


	async function handleUser() { // esse teste possivelmente deu certo
	
	const token = localStorage.getItem('token').replace(/["]/g, '');

		fetch(urlUser, {
		method: 'post',
		body: JSON.stringify({
			token
		})
		}).then(function(response) {
			return response.json();
		}).then(data => {
				setUser(data);
		}).catch(error => {
			// Lidar com erros
			console.error(error);
		});

 	}

	async function handleLogin(e) { // esse teste possivelmente deu certo
		e.preventDefault();
		fetch(urlLogin, {
		method: 'post',
		body: JSON.stringify({
			login,
			password
		})
		}).then(function(response) {
			return response.json();
		}).then(data => {
			if (data != false) {
				const token = data;
				localStorage.setItem('token', JSON.stringify(token));
				axios.defaults.headers.common['Authorization'] = token;
				setAuthenticated(true);
				someFunction('home/'+token);
			}else{
				alert('Email e/ou senha incorretos');
			}
		}).catch(error => {
			// Lidar com erros
			console.error(error);
		});

  }

  function handleLogout(e){
	  e.preventDefault();
	  localStorage.removeItem('token');
	  axios.defaults.headers.common['Authorization'] = undefined;
	  setAuthenticated(false);
	  setUser(null);
	  someFunction('');
	  setLoading(true);
  }

  const someFunction = (key) => {{
    navigate("/"+key, { replace: true });
    navigate("/"+key);
  }}

  if (loading) {
	return (
		<Spinner animation="border" role="status" variant="success">
		  <span className="visually-hidden">Loading...</span>
		</Spinner>
	  );
  }



	return(
		<Context.Provider value={{ authenticated, handleLogin, setLogin, setPassword, handleLogout, setAuthenticated, user, setLoading, setUser}}>
			{children}
		</Context.Provider>
		);
}

export { Context, AuthProvider };