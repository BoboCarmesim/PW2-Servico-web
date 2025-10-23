import{filmes} from "../data/lista filmes/filmes.js"
import CardFilme from '../components/CardFilme'


function Home (){
    const estiloListaCards = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        listStyle: 'none'
    }

    return <div>
        <h1>Filmes</h1>

        <ul style={estiloListaCards}>
            {
                filmes.map(( filme ) =>{
                    return (
                        <CardFilme key={`card-filme-${ filme.id }`} filme={filme}/>
                    );
                })
            }
            
        </ul>
    </div>
}

export default Home;