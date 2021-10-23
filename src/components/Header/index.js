import React from 'react';


import SMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={SMDBLogo} alt='smdb-logo'/>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
)

export default Header;