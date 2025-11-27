"use client";

import{filmes} from "../data/lista filmes/filmes.js"
import CardFilme from '../components/CardFilme'

console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY)

function Home (){
    const estiloListaCards = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        listStyle: 'none'
    }

    const urlVamosChamar =
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&page=1`;

    let reposta = null;

    fetch(urlVamosChamar).then(res => {
        reposta = res
    });

    console.log(reposta)

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