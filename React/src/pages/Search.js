//Hooks
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Search = () => { // os parâmetros ainda não foram configurados nas rotas
    const [searchParams] = useSearchParams();

    const url = "http://localhost/teste_integracao?" + searchParams;
    // essa url deve ser do react
     // a pesquisa deve ser feita em uma rota do react, mas a matriz de dados deve vir do php

    const {data : items,httpConfig, loading, error} = useFetch(url);

    console.log(items);

    return (
        <div>
            <h1>Elementos</h1>
            {/* loading */}
            {loading && <p>Carregando Dados...</p>}
            {error &&<p>{error}</p>}
            {!loading && <ul>
            {items && items.map((user) => (
                <li key={user.id}>
                {user.name}
                </li>
            ))}
            </ul>}

        </div>
    )
       

}

export default Search;