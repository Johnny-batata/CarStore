import React from 'react';
import {
  Wrapper, Container, Title, SubTitle,
} from './styles';
import Header from '../GeneralComponents/Header';
import HomeSections from './components/HomeSections';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Wrapper>
      <Title>Bem-vindo, Carlos</Title>
      <SubTitle>Menu</SubTitle>
      <HomeSections />
    </Wrapper>
  </Container>
);

export default Home;
