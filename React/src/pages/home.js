import "../componentes/Tela.css"
import Header2 from "../componentes/Header2";
import Quests from "../componentes/Quests";
import Tabuleiro from "../componentes/tabuleiro";
function Home (){
    return(
        <div>
            <Header2/>
            <main>
                <Tabuleiro/>
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