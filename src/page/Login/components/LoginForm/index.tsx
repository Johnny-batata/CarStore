import React from 'react';
import {
  FormSection,
  TitleContent, SubTitleContent, SubTitleSection, Label, Input, ForgotPasswordContainer, Button,
  ContentForm,
} from './styles';

const LoginForm: React.FC = () => (
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
);

export default LoginForm;
