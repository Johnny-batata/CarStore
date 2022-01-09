import React from 'react';
import Header from '../GeneralComponents/Header';
import {
  Container, Wrapper, Title,
} from './styles';
import { useFetch } from './useFetch';

import Table from './components/Table';

const CarList: React.FC = () => {
  const { data } = useFetch('vehicles');

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Todos Veículos</Title>

        { data && <Table arr={data} /> }

      </Wrapper>
    </Container>
  );
};

export default CarList;
