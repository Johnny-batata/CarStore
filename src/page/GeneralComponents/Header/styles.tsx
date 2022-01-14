import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* height: 11.71875%; */
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left:7.8125%;
  padding-right:7.8125%;

  @media (max-width: 760px) { 
    #searchBar, #btn-exit {
        display: none;
      }
      justify-content: center;
  }
`;

export const LogoImg = styled.img`
  width: 28.5px;
  height: 35.19px;
  margin-right: 3.02083333333%;
`;

export const Title = styled.h1`
  /* font-family: Poppins; */
  font-style: SemiBold;
  font-size: 38px;
  line-height: 78px;
  line-height: 137.67%;
  align: Left;
  vertical-align: Center;
  letter-spacing: -3%;
  color:#F54A48;
  fill: Solid;
`;

export const TitleSection = styled.section`
  align-items: center;
  justify-content: space-around;
  display: flex;
`;

export const Button = styled.button`
  width: 75px;
  height: 38px;
  background: #F54A48;
  border-radius: 3px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #FFFFFF;
`;

export const Input = styled.input`
  width: 430px;
  height: 44px;
  background: #F9F9F9;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
`;
