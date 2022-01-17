import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import MaterialTable from 'material-table';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridSortDirection, GridSortModel,
} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {
  Thead, Ttable, Th, TableWrapper, TableSectionHeader, TableSectionTitle, Wrapper, Title, TdDiv,
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

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps): any {
  const { clearSearch, onChange, value } = props;
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={value}
        onChange={onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: value ? 'visible' : 'hidden' }}
              onClick={clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  );
}

const Table: React.FC<IElements> = ({ arr } :any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [buttonsQuantity, setButtonsQuantity] = useState<number>(0);
  const [offsetNumber, setOffsetNumber] = useState<number>(1);
  const [skipLimit, setSkipLimit] = useState<number>(7);

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'id',
      sort: 'asc' as GridSortDirection,
    },
  ]);

  const location = useLocation();

  const path = location.pathname.split('/', 3);

  const initialPageConfig: any = {
    all: {
      title: 'Todos Veículos',
      subtitle: 'Listagem geral de veículos',
      skipLimit: 7,
      tableHeader: ['id', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'],

    },
    unavailable: {
      title: 'Seus Veículos',
      subtitle: 'Listagem de veículos reservados e vendidos',
      skipLimit: 7,
      tableHeader: ['id', 'MARCA', 'MODELO', 'ANO', 'KM', 'COR', 'STATUS', 'CHASSI', 'VALOR'],
    },
    employees: {
      title: 'Funcionários',
      subtitle: 'Listagem de funcionários da empresa',
      skipLimit: 5,
      tableHeader: ['id', 'NOME', 'EMAIL', 'CPF', 'VALOR', 'BIO'],
    },
  };
  const rowElementsObject = ():any => {
    const arra: any = [];

    arr.map((el:any, index: number) => {
      const obj: any = {};
      initialPageConfig[path[path.length - 1]].tableHeader.forEach((e:any) => {
        obj[e] = el[e.toLowerCase()];
      });
      return arra.push(obj);
    });
    return arra;
  };
  const [pageSize, setPageSize] = React.useState<number>(
    initialPageConfig[path[path.length - 1]].skipLimit,
  );

  const [searchText, setSearchText] = React.useState('');
  // const [rows, setRows] = React.useState<any[]>(rowElements);

  useEffect(() => {
    setButtonsQuantity(Math.floor(arr.length / skipLimit));
    if (path[path.length - 1] === 'employees') {
      setSkipLimit(5);
    }
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

  // const renderTableBody = (): JSX.Element => {
  //   const last = currentPage * skipLimit;
  //   const initial = last - skipLimit;
  //   const data = arr.slice(initial, last);

  //   return data.map((el:any) => (
  //     <tr key={el.id}>
  //       {
  //         initialPageConfig[path[path.length - 1]].tableHeader.map((e:any) => {
  //           const status: any = {
  //             Vendido: { color: '#F54A48', theme: 'rgba(245, 74, 72, 0.2)' },
  //             Reservado: { color: '#FAC12F', theme: 'rgba(250, 193, 47, 0.2)' },
  //             Disponível: { color: '#34C38F', theme: 'rgba(52, 195, 143, 0.2)' },
  //           };
  //     const color = status[el[e.toLowerCase()]] ? status[el[e.toLowerCase()]].color : '#495057';
  //     const theme = status[el[e.toLowerCase()]] ? status[el[e.toLowerCase()]].theme : '#FFFFF';
  //           return (
  //             <td data-title={e}>
  //               <TdDiv
  //                 color={color}
  //                 theme={theme}
  //                 className="title"
  //               >
  //                 { el[e.toLowerCase()] }
  //               </TdDiv>
  //             </td>
  //           );
  //         })
  //       }
  //     </tr>
  //   ));
  // };

  const requestSearch = (searchValue: string): any => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = arr
      .filter((row: any) => Object.keys(row).some((field: any) => searchRegex
        .test(row[field].toString())));
    // setRows(filteredRows);
  };

  // const rows = arr.map((el:any) => (
  //   initialPageConfig[path[path.length - 1]].tableHeader.map((e:any) => {
  //     const status: any = {
  //       Vendido: { color: '#F54A48', theme: 'rgba(245, 74, 72, 0.2)' },
  //       Reservado: { color: '#FAC12F', theme: 'rgba(250, 193, 47, 0.2)' },
  //       Disponível: { color: '#34C38F', theme: 'rgba(52, 195, 143, 0.2)' },
  //     };
  //     const color = status[el[e.toLowerCase()]] ? status[el[e.toLowerCase()]].color : '#495057';
  //     const theme = status[el[e.toLowerCase()]] ? status[el[e.toLowerCase()]].theme : '#FFFFF';
  //     return (
  //       <td data-title={e}>
  //         <TdDiv
  //           color={color}
  //           theme={theme}
  //           className="title"
  //         >
  //           { el[e.toLowerCase()] }
  //         </TdDiv>
  //       </td>
  //     );
  //   })
  // ));

  // React.useEffect(() => {
  //   setRows(arr);
  // }, [arr]);

  const columns = initialPageConfig[path[path.length - 1]].tableHeader
    .map((el: string) => ({ field: el }));

  console.log(initialPageConfig[path[path.length - 1]].skipLimit, 'bah');
  return (
    <Wrapper>
      <Title>{initialPageConfig[path[path.length - 1]].title}</Title>
      <TableWrapper>
        <TableSectionHeader>
          <TableSectionTitle>
            {initialPageConfig[path[path.length - 1]].subtitle}
          </TableSectionTitle>
        </TableSectionHeader>
        { console.log('row elements', rowElementsObject())}
        <Box sx={{ height: 530, width: 1 }}>
          <DataGrid
            components={{ Toolbar: QuickSearchToolbar }}
            rows={rowElementsObject()}
            getRowId={(row) => row.id}
            sortingOrder={['desc', 'asc']}
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[initialPageConfig[path[path.length - 1]].skipLimit]}
            pagination
            columns={columns}
            componentsProps={{
              toolbar: {
                value: searchText,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => requestSearch(e.target.value),
                clearSearch: () => requestSearch(''),
              },
            }}
            // sx={{
            //   boxShadow: 2,
            //   border: 2,
            //   borderColor: 'primary.light',
            //   '& .MuiDataGrid-cell:hover': {
            //     color: 'primary.main',
            //   },
            // }}
          />
        </Box>
      </TableWrapper>
    </Wrapper>

  );
};

export default Table;
