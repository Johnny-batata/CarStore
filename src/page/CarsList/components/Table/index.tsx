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
  arr: IArr[]
}

const Table: React.FC<IElements> = ({ arr } :any) => {
  const carHeader = ['ID', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'];
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
    },
    unavailable: {
      title: 'Seus Veículos',
      subtitle: 'Listagem de veículos reservados e vendidos',
      skipLimit: 7,

    },
    employees: {
      title: 'Funcionários',
      subtitle: 'Listagem de funcionários da empresa',
      skipLimit: 5,
    },
  };

  const path = location.pathname.split('/', 3);
  useEffect(() => {
    setButtonsQuantity(Math.floor(arr.length / skipLimit));
    if (path[path.length - 1] === 'employees') {
      setSkipLimit(5);
      console.log('entrei');
    }
    console.log(location.pathname, 'location', path, path[path.length - 1], initialPageConfig[path[path.length - 1]]);
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
      console.log('off', off);
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
      return setOffsetNumber(offsetNumber - 3);
    }
    setCurrentPage(currentPage + 3);
    return setOffsetNumber(offsetNumber + 3);
  };

  return (
    <Wrapper>
      <Title>{initialPageConfig[path[path.length - 1]].title}</Title>
      {/* <Title>sapin</Title> */}
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
            { renderHeader(carHeader)}
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
