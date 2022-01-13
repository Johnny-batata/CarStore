import styled from 'styled-components';

export const Thead = styled.thead`
  width: 100%;
  background: #F9F9F9;
  border-radius: 3px;
  height: 71px;
  padding: 0;
`;

export const Ttable = styled.table`
  width: 100%;  
  border-spacing: 0;
  margin-top: 20px;
`;

export const Th = styled.th`
  padding: 0;
`;

export const TableWrapper = styled.section`
  padding-left: 0.92592592592%;
  padding-right: 0.92592592592%;
  padding-top: 20px;
  padding-bottom: 20px;
  height: calc(100% - 9.1796875% - 45px - 40px);
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

export const Wrapper = styled.div`
    margin-left: 7.8125%;
    margin-right: 7.8125%;
    /* margin-left: 40px; */
    /* margin-right: 40px; */

  
    height: calc(100% - 9.1796875% - 45px - 40px);
    margin-bottom: 9.1796875%;

    @media (max-width: 760px) {
      thead {
        display: none;
      }
      td {
        display: flex;
        align-items: center;
        /* justify-content: center */
        /* align-items: center; */
        /* width:100%; */
      }
      tr {
        display: block;
      }

      table td::before {
        content:attr(data-title);
        display:block;
        /* display:flex; */
        font-weight: bold;
        left: 0;
        margin: 30px;
        padding: 5px;
        /* position: absolute; */
      }
      ${TableSectionHeader} {
        font-size: 23px;
        flex-direction: column;
        margin-bottom: 12px;
        text-align: center;
        color: black;
}
      }
    }



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

export const TdDiv = styled.div`
  color: ${(props) => props.color || '#495057'};
  background-color: ${(props) => props.theme || '#FFFFFF'};
  /* height: 50px; */
font-weight: 500;
font-size: 16px;
  text-align: center;
  margin: 30px;
  align-items: center;
    display: flex;
    justify-content: center;
    /* padding-top: 5px; */
    /* padding-bottom: 5px; */
    /* padding-bottom: 5px; */
    padding: 5px;
`;
