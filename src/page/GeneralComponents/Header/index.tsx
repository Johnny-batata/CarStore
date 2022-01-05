import React from 'react';

import {
  HeaderContainer, LogoImg, Title, TitleSection, Button, Input,
} from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <TitleSection>
      <LogoImg src="https://avatars.githubusercontent.com/u/63678630?s=200&v=4" alt="sapo" />
      <Title>AutoLuby </Title>
    </TitleSection>

    <Input type="text" id="searchBar" />

    <Button type="button">Sair</Button>
  </HeaderContainer>
);

export default Header;
