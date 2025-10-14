import{filmes} from "../data/lista filmes/filmes.js"

function Home (){
    
    const estiloImagem ={
        width: "300px"
    }

    return <div>
        <h1>Filmes</h1>

        <ul>
            {
                filmes.map(( filme ) =>{
                    return (
                        <li key={`card-filme-${ filme.id }`}>
                            <p>Nome do filme:</p>

                            <p>Título: {filme.titulo} </p>
                            <p>Ano: {filme.ano}</p>
                            <p>Gênero: {filme.genero}</p>
                            <p>Nota: {filme.nota}</p>

                            <img style={estiloImagem} src={filme.poster}/>
                        </li>
                    );
                })
            }

            
        </ul>
    </div>
}

export default Home;