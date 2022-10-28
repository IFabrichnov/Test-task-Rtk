import * as React from 'react';
import { DataGrid, GridActionsCellItem, gridClasses  } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Box } from "@mui/material";
import { FaBars } from "react-icons/fa";

const other = {
    autoHeight: true,
};

const initialRows = [
    {
        id: 1,
        'Штрихкод': 'RT00068158',
        'Арендатор стойкоместа': 'M100 000 Mail.ru',
        'Здание': 'Udomla-1 Удомля, корпус 1',
        'Зал': '20H4 Секция 1 - Модуль 4',
        'Стойкоместо': '20H4D050 4/4/5',
        'Юнит': '22',
        'Категория': 'вычислительное оборудования',
        'Тип': 'дисковое устройство',
        'Модель': '3PAR StoreServ 8450'
    },
    {
        id: 2,
        name: 'Nicolas',
        age: 36,
        country: 'France',
        discount: '',
    },
    {
        id: 3,
        name: 'Kate',
        age: 19,
        country: 'Brazil',
        discount: 'junior',
    },
];

export default function NewTable() {
    const [rows, setRows] = React.useState(initialRows);

    const deleteUser = React.useCallback(
        (id) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        [],
    );

    const duplicateUser = React.useCallback(
        (id) => () => {
            setRows((prevRows) => {
                const rowToDuplicate = prevRows.find((row) => row.id === id);
                return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
            });
        },
        [],
    );

    const columns = React.useMemo(
        () => [
            {
                field: 'actionsNew',
                flex: 1,
                cellClassName: 'super-app-theme--cell',
                type: 'actions',
                width: 40,
                headerClassName: 'super-app-theme--header', headerAlign: 'left',
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DehazeIcon />}
                        label="Duplicate User"
                        onClick={duplicateUser(params.id)}
                    />,
                ],
            },
            { field: 'Штрихкод', flex: 4, type: 'string', width: 150, headerClassName: 'super-app-theme--header', headerAlign: 'left' },
            { field: 'Арендатор стойкоместа', flex: 4, width: 180, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left' },
            { field: 'Здание', flex: 4, width: 135, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left' },
            { field: 'Зал', width: 140, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            { field: 'Стойкоместо', width: 120, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            { field: 'Юнит', width: 60, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            { field: 'Категория', width: 140, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            { field: 'Тип', width: 120, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            { field: 'Модель', width: 160, type: 'string', headerClassName: 'super-app-theme--header', headerAlign: 'left'},
            {
                field: 'actions',
                type: 'actions',
                headerClassName: 'super-app-theme--header', headerAlign: 'left',
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={deleteUser(params.id)}
                    />
                ],
            },
        ],
        [deleteUser, duplicateUser],
    );

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: '#f2f6ff',
                    color: '#515863',
                    border: '0 #f2f6ff',
                    width: '100%'
                },
                '& .super-app-theme--cell': {
                    borderRight: '1px solid #f3f3f4',
                    width: '100%'
                },
                padding: '20px',
                boxSizing: 'border-box'
            }}
        >
            <DataGrid getRowHeight={() => 'auto'}
                      sx={{
                          [`& .${gridClasses.cell}`]: {
                              py: 1,
                          },
                          [`& .${gridClasses.columns}`]: {
                              backgroundColor: '#f2f6ff',
                          },
                      }}
                      columns={columns} rows={rows} {...other} hideFooter disableColumnMenu  />
        </Box>
    );
}