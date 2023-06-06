import "../componentes/Tela.css"
import Quests from "../componentes/Quests";
import Tabletop from "../componentes/Tabletop";
import SearchForm from "../componentes/SearchForm";
import HeaderHome from "../componentes/HeaderHome";

function Home (){
    return(
        <div>

            <HeaderHome/>
            <main>
                <Tabletop/>
                <h5 className='pb-3'>
                Questionários Recomendados
                </h5>
                <Quests/>
                <h5 className='pb-3 pt-5'>
                Todos os Questionários
                </h5>
                <Quests />
            </main>
            
            
        </div>
    )
}

export default Home