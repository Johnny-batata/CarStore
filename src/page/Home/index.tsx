import React from 'react';
import {
  Wrapper, Container, Title, SubTitle,
} from './styles';
import Header from '../GeneralComponents/Header';
import ImageOne from '../../assets/Home/car1.png';
import ImageTwo from '../../assets/Home/car2.png';
import ImageThree from '../../assets/Home/notACar.png';

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
