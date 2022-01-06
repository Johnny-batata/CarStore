import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

export const Wrapper = styled.div`
  padding-top: 4.21875%;
  padding-left: 7.8125%;
  padding-bottom: 4.21875%;
  height: calc(100% - 4.21875%);
  width: calc(100% - 7.8125%);`;

export const ColumnImg = styled.div`
  width: 50%;
  height: 100%;
`;

export const PanelForm = styled.div`
  width: 50%;
  height: calc(100% - 4.21875%);
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

export const LogoImg = styled.img`
  width: 28.5px;
  height: 35.19px;
  margin-right: 3.02083333333%;
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  height: 57px;
`;
