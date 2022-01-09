import React, { useEffect, useState } from 'react';
import {
  Thead, Ttable, Th, TableWrapper, TableSectionHeader, TableSectionTitle,
} from './styles';

interface IArr {
  ano: string,
  chassi: string,
  cor: string,
  id: number,
  km: string,
  marca: string,
  modelo: string,
  status: string,
  valor: number

}

interface IElements {
  arr: IArr[]
}

const Table: React.FC<IElements> = ({ arr } :any) => {
  const carHeader = ['ID', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [buttonsQuantity, setButtonsQuantity] = useState<number>(0);
  const [offset, setOffset] = useState<number>(1);

  useEffect(() => {
    setButtonsQuantity(Math.floor(arr.length / 7));
  }, []);

  const renderHeader = (array: any): JSX.Element => (
    array.map((el: string) => (
      <Th key={el}>
        {el}
      </Th>
    ))
  );

  const renderButtons = (off:number): any => {
    const buttons = [];
    for (let i = off; i <= off + 2; i += 1) {
      buttons.push(
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" value={i} onClick={() => setCurrentPage(i)}>
          {' '}
          {i}
          {' '}
        </button>,
      );
    }
    return buttons;
  };

  const renderTableBody = (): JSX.Element => {
    const last = currentPage * 7;
    const initial = last - 7;

    const data = arr.slice(initial, last);
    console.log(initial, 'current stage', last, data, 'offset', offset);

    return data.map((el:IArr) => (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.marca}</td>
        <td>{el.modelo}</td>
        <td>{el.ano}</td>
        <td>{el.km}</td>
        <td>{el.cor}</td>
        <td>{el.status}</td>
        <td>{el.chassi}</td>
        <td>{el.valor}</td>
      </tr>
    ));
  };

  const handleTablePagination = (signal : string):void => {
    if (signal === '-') {
      setCurrentPage(currentPage - 3);
      console.log('sinal de menos');
      return setOffset(offset - 3);
    }
    console.log('sinal de mais');

    setCurrentPage(currentPage + 3);
    return setOffset(offset + 3);
  };

  return (
    <TableWrapper>
      <TableSectionHeader>
        <TableSectionTitle>Listagem geral de veículos</TableSectionTitle>
        <section>
          <div>
            <button type="button" disabled={currentPage - 3 < 0} onClick={() => handleTablePagination('-')}>Anterior </button>
            {renderButtons(offset)}
            <button type="button" disabled={currentPage + 3 > buttonsQuantity} onClick={() => handleTablePagination('+')}>Próxima </button>
            <input type="text" />
          </div>
        </section>
      </TableSectionHeader>
      <Ttable>
        <Thead>
          { renderHeader(carHeader)}
        </Thead>
        <tbody>
          {renderTableBody() }
        </tbody>
      </Ttable>
    </TableWrapper>

  );
};

export default Table;
