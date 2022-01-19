import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* position: absolute; */
  /* height: max-content; */
  height: 100%;
  height: max-content;

  /* width: max-content; */

`;

export const Wrapper = styled.div`
    /* margin-left: 7.8125%; */
    margin-left: 40px;
    margin-right: 40px;
    /* margin-right: 7.8125%; */
    height: calc(100% - 9.1796875% - 45px - 40px);
    margin-bottom: 9.1796875%;
    `;

export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  color: #495057;
  margin-top: 45px;
  margin-bottom: 40px;
`;

export const TableWrapper = styled.section`
  padding-left: 0.92592592592%;
  padding-right: 0.92592592592%;
  /* padding-top: 2.94117647059%; */
  padding-top: 20px;
  /* padding-bottom: 2.94117647059%; */
  padding-bottom: 20px;
  height: calc(100% - 9.1796875% - 45px - 40px);
  /* display: flex; */
  /* width: 100% */
  background: #FFFFFF;
border: 1px solid #E6E6E6;
box-sizing: border-box;
box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
border-radius: 3px;
`;

export const TableSectionHeader = styled.section`
  /* height: 11.7647058824%; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableSectionTitle = styled.section`
  letter-spacing: -0.02em;
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  color: #495057;
`;
