import {useState, useEffect} from 'react';


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        };
    }

    useEffect(() => { // pega a requisição

        const fetchData = async () => {

            //loading
            setLoading(true);

            try {
                
            const res = await fetch(url);
            const json = await res.json();

            setData(json);

            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados");
            }

            setLoading(false);
        };

        fetchData();

    }, [url , callFetch]);

    useEffect(() => { // verifica as requisições e atualiza
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url , config];
                const res = await fetch(...fetchOptions);
    
                const json = await res.json();
    
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url]);


    return {data , httpConfig, loading, error};
}
