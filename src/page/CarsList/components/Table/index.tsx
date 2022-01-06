import React from 'react';

import { Thead, Ttable, Th } from './styles';

const Table: React.FC = () => {
  console.log('sapin');

  const carHeader = ['MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'];

  const renderHeader = (array: any): JSX.Element => (
    array.map((el: string) => (
      <Th key={el}>
        {el}
      </Th>
    ))
  );
  return (
    <Ttable>
      <Thead>
        { renderHeader(carHeader)}
      </Thead>
      <tbody>
        <tr>
          <td>queijin</td>
          <td>queijin</td>
        </tr>
      </tbody>
    </Ttable>
  );
};

export default Table;
