import React from 'react';
import {
  Container, Wrapper, PanelForm, ColumnImg, ContentForm, Title, LogoImg, LogoSection, FormSection,
  TitleContent, SubTitleContent, SubTitleSection, Label, Input, ForgotPasswordContainer, Button,
} from './styles';
import Car from '../../assets/Login/Login-car.png';

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
          <FormSection>
            <div>
              <TitleContent>
                Bem-vindo à AutoLuby
              </TitleContent>
              <SubTitleSection>
                <SubTitleContent>Faça o login para acessar sua conta.</SubTitleContent>
              </SubTitleSection>
              <ContentForm>
                <Label htmlFor="email">
                  Endereço de email
                  <Input type="text" id="email" placeholder="@mail.com" />
                </Label>
                <Label htmlFor="password">
                  Senha
                  <Input type="text" id="password" placeholder="senha" />
                </Label>
                <ForgotPasswordContainer>
                  <label htmlFor="forgot-password">
                    <input type="checkbox" id="forgot-password" />
                    Lembrar minha senha
                  </label>
                  <p>
                    Esqueceu a senha?
                  </p>
                </ForgotPasswordContainer>
                <Button type="button">Entrar </Button>
                <p>
                  Ainda não possui conta? Criar Conta
                </p>
              </ContentForm>
            </div>
          </FormSection>
        </Wrapper>
      </PanelForm>
      <ColumnImg>
        <img src={Car} alt="carro" style={{ width: '100%', height: '100%' }} />
      </ColumnImg>
    </Container>
  );
};

export default Login;
