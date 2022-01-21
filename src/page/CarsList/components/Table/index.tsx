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
      tableHeader: ['id', 'marca', 'modelo', 'ano', 'km', 'cor', 'status', 'chassi', 'valor'],

    },
    unavailable: {
      title: 'Seus Veículos',
      subtitle: 'Listagem de veículos reservados e vendidos',
      skipLimit: 7,
      tableHeader: ['id', 'marca', 'modelo', 'ano', 'km', 'cor', 'status', 'chassi', 'valor'],
    },
    employees: {
      title: 'Funcionários',
      subtitle: 'Listagem de funcionários da empresa',
      skipLimit: 5,
      tableHeader: ['id', 'nome', 'email', 'cpf', 'valor', 'bio'],
    },
  };

  const [pageSize, setPageSize] = React.useState<number>(
    initialPageConfig[path[path.length - 1]].skipLimit,
  );

  const [rows, setRows] = React.useState<any[]>([]);
  const rowElementsObject = ():any => {
    const arra: any = [];

    arr.map((el:any) => {
      const obj: any = {};
      initialPageConfig[path[path.length - 1]].tableHeader.forEach((e:any) => {
        // item = obj[e].toUpperCase();
        obj[e] = el[e.toLowerCase()];
      });
      return arra.push(obj);
    });
    setRows(arra);
    return arra;
  };

  const [searchText, setSearchText] = React.useState('');

  useEffect(() => {
    rowElementsObject();
  }, []);

  const requestSearch = (searchValue: string): any => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = arr
      .filter((row: any) => Object.keys(row).some((field: any) => searchRegex
        .test(row[field.toLowerCase()].toString())));
    setRows(filteredRows);
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

  useEffect(() => {
    setRows(arr);
    // rowElementsObject();
  }, [arr]);

  const columns = initialPageConfig[path[path.length - 1]].tableHeader
    .map((el: string) => {
      if (initialPageConfig[path[path.length - 1]].title !== 'Funcionários') return { field: el, flex: 1, minWidth: 150 };
      if (el === 'EMAIL') return { field: el, flex: 0.3, minWidth: 150 };
      if (el === 'BIO') return { field: el, flex: 1, minWidth: 550 };
      return { field: el };
    });

  return (
    <Wrapper>
      <Title>{initialPageConfig[path[path.length - 1]].title}</Title>
      <TableWrapper>
        <TableSectionHeader>
          <TableSectionTitle>
            {initialPageConfig[path[path.length - 1]].subtitle}
          </TableSectionTitle>
        </TableSectionHeader>
        <Box sx={{ height: 530, width: 1 }}>
          {console.log(rows, 'rows')}
          <DataGrid
            components={{ Toolbar: QuickSearchToolbar }}
            // rows={rowElementsObject()}
            rows={rows}
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
          />
        </Box>
      </TableWrapper>
    </Wrapper>

  );
};

export default Table;
