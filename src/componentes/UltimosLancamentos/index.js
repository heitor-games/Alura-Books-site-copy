import { livros } from "./DadosLancamentos"
import { Titulo } from '../Titulo'
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png'
import styled from "styled-components"

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo Cor='#EB9B00' FontSize='' alinhamento='center'>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src} alt="Livro Lancamento"/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />

        </LancamentosContainer>
    )
}

export default UltimosLancamentos