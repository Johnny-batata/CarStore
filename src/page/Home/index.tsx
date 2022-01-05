import React from 'react';
import {
  Wrapper, Container, Title, SubTitle, ContentSectionWrapper, ContentSection, ContentSectionImg,
  ContentSectionTitle, ContentSectionSubTitle, ContentSectionFooter,
} from './styles';
import Header from '../GeneralComponents/Header';
import ImageOne from '../../assets/Home/car1.png';
import ImageTwo from '../../assets/Home/car2.png';
import ImageThree from '../../assets/Home/notACar.png';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Wrapper>
      <Title>Bem-vindo, Carlos</Title>
      <SubTitle>Menu</SubTitle>
      <ContentSection>
        <ContentSectionWrapper>
          <ContentSectionTitle>
            Veículos reservados e vendidos
          </ContentSectionTitle>
          <ContentSectionSubTitle>
            Veículos reservados e vendidos por você
          </ContentSectionSubTitle>
          <ContentSectionFooter>147 Veículos</ContentSectionFooter>
        </ContentSectionWrapper>
        <ContentSectionImg src={ImageOne} alt="image-one" />
      </ContentSection>
    </Wrapper>
  </Container>
);

export default Home;
