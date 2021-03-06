import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 4.21875%;
  /* padding-top: 4.21875%; */
  margin-left: 7.8125%;
  /* padding-left: 7.8125%; */
  margin-bottom: 4.21875%;
  /* padding-bottom: 4.21875%; */
  height: calc(100% - 4.21875%);
  width: calc(100% - 7.8125%);`;

export const ColumnImg = styled.div`
  width: 50%;
  /* height: 100%; */
  height: auto;

`;

export const PanelForm = styled.div`
  width: 50%;
  /* min-width: 800px; */
  min-width: 510px;
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

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  @media (max-width: 1080px) {
    ${ColumnImg} {
      display:none;
      width: 0;
    }
    ${PanelForm} {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    ${ColumnImg} {
      display:none;
      width: 0;
    }
    ${PanelForm} {
      width: 100%;
      min-width: 0;
    }
  }

`;
