import styled from 'styled-components';

export const FormSection = styled.section`
  padding-top: 17.3828125%;
  padding-left: 5.67708333333%;
  padding-right: calc(7.8125% + 5.67708333333%);
  padding-bottom: 17.3828125%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 17.3828125% * 2);
`;

export const TitleContent = styled.h1`
  font-family: Poppins;
  font-style: SemiBold;
  font-size: 38px;
  line-height: 46px;
  line-height: 120%;
  align: Left;
  vertical-align: Center;
  letter-spacing: -3%;
  color:#3C3C3C;
  fill: Solid;
  margin:0;
`;

export const SubTitleContent = styled.h3`
  font-family: Poppins;
  font-style: SemiBold;
  font-size: 12px;
  line-height: 14px;
  line-height: 120%;
  align: Left;
  vertical-align: Center;
  letter-spacing: -3%;
  color:#A2A2A2;
  fill: Solid;
`;

export const SubTitleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ContentForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; 
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 93%;
  background-color: #F9F9F9;
  border-radius: 1px;
  border-color: #E6E6E6;
  height: 30px;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:10px;
  padding-right:10px;
  font-size:18px;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color:#FFFFFF;
  fill: Solid;
  height:37px;
  background-color: #F54A48;
  border-radius: 3px;
`;
