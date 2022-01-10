import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Thead, Ttable, Th, TableWrapper, TableSectionHeader, TableSectionTitle, Wrapper, Title,
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
  arr: any[]
}

const Table: React.FC<IElements> = ({ arr } :any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [buttonsQuantity, setButtonsQuantity] = useState<number>(0);
  const [offsetNumber, setOffsetNumber] = useState<number>(1);
  const [skipLimit, setSkipLimit] = useState<number>(7);

  const location = useLocation();

  const initialPageConfig: any = {
    all: {
      title: 'Todos Veículos',
      subtitle: 'Listagem geral de veículos',
      skipLimit: 7,
      tableHeader: ['ID', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'],
    },
    unavailable: {
      title: 'Seus Veículos',
      subtitle: 'Listagem de veículos reservados e vendidos',
      skipLimit: 7,
      tableHeader: ['ID', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'],
    },
    employees: {
      title: 'Funcionários',
      subtitle: 'Listagem de funcionários da empresa',
      skipLimit: 5,
      tableHeader: ['ID', 'NOME', 'EMAIL', 'CPF', 'VALOR', 'BIO'],
    },
  };

  const path = location.pathname.split('/', 3);
  useEffect(() => {
    setButtonsQuantity(Math.floor(arr.length / skipLimit));
    if (path[path.length - 1] === 'employees') {
      setSkipLimit(5);
      console.log('entrei');
    }
    console.log(location.pathname, 'location', path, path[path.length - 1], arr);
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
    const last = currentPage * skipLimit;
    const initial = last - skipLimit;
    console.log('last', last, currentPage, skipLimit);

    const data = arr.slice(initial, last);

    return data.map((el:any) => (
      <tr key={el.id}>
        {
          initialPageConfig[path[path.length - 1]].tableHeader.map((e:any) => (
            <td>{el[e.toLowerCase()]}</td>
          ))
        }
      </tr>

    ));
  };

  const handleTablePagination = (signal : string):void => {
    if (signal === '-') {
      setCurrentPage(currentPage - 3);
      return setOffsetNumber(offsetNumber - 3);
    }
    setCurrentPage(currentPage + 3);
    return setOffsetNumber(offsetNumber + 3);
  };

  return (
    <Wrapper>
      <Title>{initialPageConfig[path[path.length - 1]].title}</Title>
      <TableWrapper>
        <TableSectionHeader>
          <TableSectionTitle>
            {initialPageConfig[path[path.length - 1]].subtitle}
            {' '}
          </TableSectionTitle>
          <section>
            <div>
              <button type="button" disabled={currentPage - 3 < 0} onClick={() => handleTablePagination('-')}>Anterior </button>
              {renderButtons(offsetNumber)}
              <button type="button" disabled={currentPage + 3 > buttonsQuantity} onClick={() => handleTablePagination('+')}>Próxima </button>
              <input type="text" />
            </div>
          </section>
        </TableSectionHeader>
        <Ttable>
          <Thead>
            { renderHeader(initialPageConfig[path[path.length - 1]].tableHeader)}
          </Thead>
          <tbody>
            {renderTableBody() }
          </tbody>
        </Ttable>
      </TableWrapper>
    </Wrapper>

  );
};

export default Table;
