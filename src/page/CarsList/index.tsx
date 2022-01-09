import React from 'react';
import Header from '../GeneralComponents/Header';
import {
  Container,
} from './styles';
import { useFetch } from './useFetch';

import Table from './components/Table';

const CarList: React.FC = () => {
  const { data } = useFetch('vehicles');

  return (
    <Container>
      <Header />

      { data && <Table arr={data} /> }

    </Container>
  );
};

export default CarList;
