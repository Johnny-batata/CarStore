import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as S from './styles';

interface IError {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const intialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = (): void => {
    console.log(formValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    console.log('name', name, 'value', value);
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values: any): any => {
    const errors: IError = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'O campo não pode ser vazio.';
    } else if (!regex.test(values.email)) {
      errors.email = 'Formato de email incorreto, por gentileza, verifique e tente novamente.';
    }
    if (!values.password) {
      errors.password = 'O campo não pode ser vazio.';
    } else if (values.password.length < 6) {
      errors.password = 'A senha precisa de pelo menos 6 caracteres';
    }
    return errors;
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      console.log('form errors', formErrors);
      submitForm();
    }
  }, [formErrors]);

  return (
    <S.FormSection>
      <div>
        <S.TitleContent>
          Bem-vindo à AutoLuby
        </S.TitleContent>
        <S.SubTitleSection>
          <S.SubTitleContent>Faça o login para acessar sua conta.</S.SubTitleContent>
        </S.SubTitleSection>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Signed in successfully</span>
        )}
        <S.ContentForm>
          <S.Label htmlFor="email">
            Endereço de email
            <S.Input type="text" onChange={handleChange} id="email" name="email" placeholder="@mail.com" />
          </S.Label>
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
          <S.Label htmlFor="password">
            Senha
            <S.Input type="text" onChange={handleChange} id="password" name="password" placeholder="senha" />
          </S.Label>

          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
          <S.ForgotPasswordContainer>
            <label htmlFor="forgot-password">
              <input type="checkbox" id="forgot-password" />
              Lembrar minha senha
            </label>
            <p>
              Esqueceu a senha?
            </p>
          </S.ForgotPasswordContainer>
          <S.Button onClick={(e) => handleSubmit(e)} type="submit">Entrar </S.Button>
          <p>
            Ainda não possui conta? Criar Conta
          </p>
        </S.ContentForm>
      </div>
    </S.FormSection>
  );
};

export default LoginForm;
