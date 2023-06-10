import "../components/Tela.css"
import Forms from "../components/Forms";
import Tabletop from "../components/Tabletop";
import SearchForm from "../components/SearchForm";
import HeaderHome from "../components/HeaderHome";

export default function Home(){
    return(
        <div>

            <HeaderHome/>
            <main>
                <Tabletop/>
                <h5 className='pb-3'>
                Questionários Recomendados
                </h5>
                <Forms/>
                <h5 className='pb-3 pt-5'>
                Todos os Questionários
                </h5>
                <Forms />
            </main>
            
            
        </div>
    )
}
