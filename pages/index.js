import{filmes} from "../data/lista filmes/filmes.js"

function Home (){
    console.log(filmes)

    const primeirofilme= filmes[0]

    const estiloImagem ={
        width: "300px"
    }

    return <div>
        <h1>Filmes</h1>

        <ul>
            <li>
                <p>Nome do filme:</p>

                <p>Título: {primeirofilme.titulo} </p>
                <p>Ano: {primeirofilme.ano}</p>
                <p>Gênero: {primeirofilme.genero}</p>
                <p>Nota: {primeirofilme.nota}</p>

                <img style={estiloImagem} src={primeirofilme.poster}/>
            </li>
        </ul>
    </div>
}

export default Home;