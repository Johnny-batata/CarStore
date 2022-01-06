import React from 'react';
import Header from '../GeneralComponents/Header';
import {
  Container, Wrapper, Title, TableWrapper, TableSectionHeader, TableSectionTitle,
} from './styles';

import Table from './components/Table';

const CarList: React.FC = () => {
  console.log('sapin gente boa');
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Todos Veículos</Title>
        <TableWrapper>
          <TableSectionHeader>
            <TableSectionTitle>Listagem geral de veículos</TableSectionTitle>
            <section>
              <div>
                <button type="button">Anterior </button>
                <button type="button">Próxima </button>
                <input type="text" />
              </div>
            </section>
          </TableSectionHeader>
          <Table />
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};

export default CarList;
