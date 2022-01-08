import React, { useEffect } from 'react';
import { Thead, Ttable, Th } from './styles';

import { useFetch } from '../../useFetch';

const Table: React.FC = () => {
  console.log('sapin');
  const { data } = useFetch('vehicles');

  const carHeader = ['MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'];

  useEffect(() => {
    console.log(data, 'data');
  }, []);

  const renderHeader = (array: any): JSX.Element => (
    array.map((el: string) => (
      <Th key={el}>
        {el}
      </Th>
    ))
  );

  // const renderButtons = async () => {
  //   const number = [];
  //   const sapo = await  data
  //   for (let i = 1; i < )

  // }

  return (
    <Ttable>
      <Thead>
        { renderHeader(carHeader)}
      </Thead>
      <tbody>
        { data && console.log(data, 'eu ') }
        <tr>
          <td>queijin</td>
          <td>queijin</td>
        </tr>
      </tbody>
    </Ttable>
  );
};

export default Table;
