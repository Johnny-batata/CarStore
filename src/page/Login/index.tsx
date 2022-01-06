import React from 'react';
import {
  Wrapper, PanelForm, ColumnImg, Title, LogoImg, LogoSection, Container,
} from './styles';
import Car from '../../assets/Login/Login-car.png';

import LoginForm from './components/LoginForm/index';

const Login: React.FC = () => {
  console.log('sapo');
  return (
    <Container>
      <PanelForm>
        <Wrapper>
          <LogoSection>
            <LogoImg src="https://avatars.githubusercontent.com/u/63678630?s=200&v=4" alt="sapo" />
            <Title>AutoLuby</Title>
          </LogoSection>
          <LoginForm />
        </Wrapper>
      </PanelForm>
      <ColumnImg>
        <img src={Car} alt="carro" style={{ width: '100%', height: '100%' }} />
      </ColumnImg>
    </Container>
  );
};

export default Login;
