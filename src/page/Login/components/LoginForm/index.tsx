import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import * as S from './styles';

const LoginForm: React.FC = () => (
  <S.FormSection>
    <div>
      <S.TitleContent>
        Bem-vindo à AutoLuby
      </S.TitleContent>
      <S.SubTitleSection>
        <S.SubTitleContent>Faça o login para acessar sua conta.</S.SubTitleContent>
      </S.SubTitleSection>
      <S.ContentForm>
        <S.Label htmlFor="email">
          Endereço de email
          <S.Input type="text" id="email" placeholder="@mail.com" />
        </S.Label>
        <S.Label htmlFor="password">
          Senha
          <S.Input type="text" id="password" placeholder="senha" />
        </S.Label>
        <S.ForgotPasswordContainer>
          <label htmlFor="forgot-password">
            <input type="checkbox" id="forgot-password" />
            Lembrar minha senha
          </label>
          <p>
            Esqueceu a senha?
          </p>
        </S.ForgotPasswordContainer>
        <S.Button type="button">Entrar </S.Button>
        <p>
          Ainda não possui conta? Criar Conta
        </p>
      </S.ContentForm>
    </div>
  </S.FormSection>
);

export default LoginForm;
