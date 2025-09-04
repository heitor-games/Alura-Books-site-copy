import Pesquisa from '../componentes/Pesquisa/index.js'
import styled from 'styled-components'
import UltimosLancamentos from '../componentes/UltimosLancamentos/index.js'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
