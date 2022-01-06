import React from 'react';
import * as S from './styles';
import Car from '../../assets/Login/Login-car.png';

import LoginForm from './components/LoginForm/index';

const Login: React.FC = () => (
  <S.Container>
    <S.PanelForm>
      <S.Wrapper>
        <S.LogoSection>
          <S.LogoImg src="https://avatars.githubusercontent.com/u/63678630?s=200&v=4" alt="sapo" />
          <S.Title>AutoLuby</S.Title>
        </S.LogoSection>
        <LoginForm />
      </S.Wrapper>
    </S.PanelForm>
    <S.ColumnImg>
      <img src={Car} alt="carro" style={{ width: '100%', height: '100%' }} />
    </S.ColumnImg>
  </S.Container>
);

export default Login;
