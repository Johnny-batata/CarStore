import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../GeneralComponents/Header';
import {
  Container,
} from './styles';
import { useFetch } from './useFetch';

import Table from './components/Table';

const CarList: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split('/', 3);
  const initialState:any = {

    all: {
      name: 'vehicles',
      query: false,
    },
    unavailable: {
      name: 'vehicles',
      query: true,

    },
    employees: {
      name: 'employees',
      query: false,

    },
  };

  const { data } = useFetch(initialState[path[path.length - 1]].name,
    initialState[path[path.length - 1]].query);

  return (
    <Container>
      <Header />

      { data && <Table arr={data} /> }

    </Container>
  );
};

export default CarList;
