import Logo from '../Logo/index.js'
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconesHeader from '../IconesHeader/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    width: 100vw;
    display: flex;
    justify-content: center;
`

function Header () {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header