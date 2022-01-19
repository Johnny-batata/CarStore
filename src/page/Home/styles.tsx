import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  height: max-content;

  /* overflow-y: hidden; */
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  /* margin-top: 65px; */
  margin-bottom: 0px;
`;

export const SubTitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  @media (max-height: 800px) {
    margin-bottom: 35px;
    margin-top: 35px;
    margin-left: 25.1666666667%;
    margin-right: 25.1666666667%;
  }

  @media (max-width: 1080px) {
    margin-left: 20.1666666667%;
    margin-right: 20.1666666667%;
  }
  @media (max-width: 760px) {
    margin-left: 10.1666666667%;
    margin-right: 10.1666666667%;
  }

  @media (max-width: 360px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 30px;


    ${Title} {
      display: flex;
      margin: 0;
    }
  }

  margin-left: 29.1666666667%;
  margin-right: 29.1666666667%;
  height: calc(100% - 130px);
  margin-bottom: 65px;
  margin-top: 65px;
;
`;
