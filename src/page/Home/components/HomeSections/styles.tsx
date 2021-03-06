import styled from 'styled-components';

export const ContentSectionWrapper = styled.section`
    /* padding: 3.75%; */
    padding: 3.75%;
    padding-bottom:20px;
    display: flex;
    width: 100%;
    flex-direction: column;
  `;

export const ContentSectionImg = styled.img`
    /* width: 32.25%; */
  `;

export const ContentSectionTitle = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #15181a;
    margin: 0;

  `;

export const ContentSectionSubTitle = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: #495057;
    margin: 0;

  `;

export const ContentSectionFooter = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #F54A48;
    /* background-color: aqua; */
    height: 100%;
    align-items: center;
    /* margin-top: 43px; */
    justify-content: flex-end;
    display: flex;

    margin-right: 20px;
  `;

export const ContentSection = styled.section`

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;

    ${ContentSectionSubTitle} {
      font-size: 17px;
      justify-content: center;
      display: flex;
    }
    ${ContentSectionTitle} {
      font-size: 27px;
      justify-content: center;
      display: flex;
    }
    ${ContentSectionImg} {
      width:100%;
    }
    ${ContentSectionFooter} {
      justify-content: flex-end;
      margin-bottom: 0;
    }
    ${ContentSectionWrapper} {
      padding-top: 10px;
      /* padding-top: 3px; */
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      width: calc(100% - 30px);

    }
  }

    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
    /* height: 230px; */

    &:hover {
        box-shadow: 0 0 0.5em  grey;
    }
  `;
