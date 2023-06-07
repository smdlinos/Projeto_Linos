import "../componentes/Tela.css"
import Forms from "../componentes/Forms";
import Tabletop from "../componentes/Tabletop";
import SearchForm from "../componentes/SearchForm";
import HeaderHome from "../componentes/HeaderHome";

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
