import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer, LogoImg, Title, TitleSection, Button, Input,
} from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <Link to="/home">
      <TitleSection>
        <LogoImg src="https://avatars.githubusercontent.com/u/63678630?s=200&v=4" alt="sapo" />
        <Title>AutoLuby </Title>
      </TitleSection>
    </Link>

    <Input type="text" id="searchBar" />
    <Link to="/">
      <Button type="button" onClick={() => localStorage.clear()}>Sair</Button>
    </Link>

  </HeaderContainer>
);

export default Header;
