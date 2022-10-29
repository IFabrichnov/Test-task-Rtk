import * as React from 'react';
import {
    DataGrid, GridActionsCellItem, gridClasses, GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import { GridRowModes } from '@mui/x-data-grid-pro';
import { randomId } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Box} from "@mui/material";
import {FaBars, FaFilter, FaPlus} from "react-icons/fa";

const other = {
    autoHeight: true,
    headerHeight: 40,
};

const initialRows = [
    {
        id: 1,
        'Штрихкод': 'RT00068159',
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
        'Штрихкод': 'RT00068160',
        'Арендатор стойкоместа': 'M100 000 Mail.ru',
        'Здание': 'Udomla-1 Удомля, корпус 1',
        'Зал': '20H4 Секция 1 - Модуль 4',
        'Стойкоместо': '20H4D050 4/4/5',
        'Юнит': '23',
        'Категория': 'вычислительное оборудования',
        'Тип': 'сервер',
        'Модель': '7xX57'
    },
    {
        id: 3,
        'Штрихкод': 'RT00068161',
        'Арендатор стойкоместа': 'M100 000 Mail.ru',
        'Здание': 'Udomla-1 Удомля, корпус 1',
        'Зал': '20H4 Секция 1 - Модуль 4',
        'Стойкоместо': '20H4D050 4/4/5',
        'Юнит': '24',
        'Категория': 'вычислительное оборудования',
        'Тип': 'дисковое устройство',
        'Модель': '3PAR StoreServ 8450'
    },
    {
        id: 4,
        'Штрихкод': 'RT00068162',
        'Арендатор стойкоместа': 'M100 000 Mail.ru',
        'Здание': 'Udomla-1 Удомля, корпус 1',
        'Зал': '20H4 Секция 1 - Модуль 4',
        'Стойкоместо': '20H4D050 4/4/5',
        'Юнит': '25',
        'Категория': 'вычислительное оборудования',
        'Тип': 'сервер',
        'Модель': '7xX57'
    },
];

function CustomToolbar(props) {
    const {setRows, setRowModesModel} = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, {id, 'Штрихкод': 'RT00000000', 'Арендатор стойкоместа': '', isNew: true}]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: {mode: GridRowModes.Edit, fieldToFocus: 'Штрихкод'},
        }));
    };

    return (
        <GridToolbarContainer>
            <Box>
                <Button sx={{color: '#7800ff'}} startIcon={<FaPlus />} onClick={handleClick}>
                    Создать
                </Button>
                <GridToolbarFilterButton sx={{color: 'black'}} />
            </Box>
            <GridToolbarDensitySelector/>
            <GridToolbarExport/>
            <GridToolbarQuickFilter/>
        </GridToolbarContainer>
    );
}

export default function NewTable() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

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
                return [...prevRows, {...rowToDuplicate, id: Date.now()}];
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
                        icon={<DehazeIcon/>}
                        label="Duplicate User"
                        onClick={duplicateUser(params.id)}
                    />,
                ],
            },
            {
                field: 'Штрихкод',
                flex: 3,
                type: 'string',
                width: 150,
                cellClassName: 'super-app-second--cell',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Арендатор стойкоместа',
                flex: 3.5,
                width: 180,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Здание',
                flex: 2.6,
                width: 135,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Зал',
                flex: 3,
                width: 140,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Стойкоместо',
                flex: 2,
                width: 120,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Юнит',
                flex: 1.5,
                width: 60,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Категория',
                flex: 2.5,
                width: 140,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Тип',
                flex: 2,
                width: 120,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'Модель',
                flex: 3,
                width: 160,
                type: 'string',
                headerClassName: 'super-app-theme--header',
                headerAlign: 'left',
                editable: true
            },
            {
                field: 'actions',
                type: 'actions',
                flex: 1.5,
                headerClassName: 'super-app-theme--header', headerAlign: 'left',
                getActions: (params) => [
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
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
                    fontWeight: '800'
                },
                '& .super-app-theme--cell': {
                    borderRight: '1px solid #f3f3f4'
                },
                '& .super-app-second--cell': {
                    color: '#7800ff'
                },
                '& .super-app-theme--cell': {
                    borderRight: '1px solid #f3f3f4'
                },
                '& 	.MuiDataGrid-root': {
                    border: 'none',
                    borderRight: '1px solid #e5e5e5'
                },
                '& 	.MuiDataGrid-cell': {
                    borderBottom: 'none'
                },
                '& 	.MuiDataGrid-columnHeaders': {
                    borderTop: '1px solid #e5e5e5',
                    borderLeft: '1px solid #e5e5e5',

                },
                '& 	.MuiDataGrid-virtualScroller': {
                    borderLeft: '1px solid #e5e5e5',
                    borderBottom: '1px solid #e5e5e5',
                    borderRight: '1px solid #e5e5e5'
                },
                '& 	.MuiDataGrid-toolbarContainer': {
                    marginBottom: '30px',
                    boxSizing: 'borderBox',
                    boxShadow: '0 10px 0 20px #ffffff'
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
                      components={{
                          Toolbar: CustomToolbar,
                      }}
                      componentsProps={{
                          toolbar: { setRows, setRowModesModel },
                      }}
                      columns={columns} rows={rows} {...other} deleteIconProps hideFooter disableColumnMenu/>
        </Box>
    );
}