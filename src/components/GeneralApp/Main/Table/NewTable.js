import * as React from 'react';
import {
    DataGrid, GridActionsCellItem, gridClasses, GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarQuickFilter,
    gridPaginatedVisibleSortedGridRowIdsSelector,
    useGridApiContext
} from '@mui/x-data-grid';
import { createSvgIcon } from '@mui/material/utils';
import {GridRowModes} from '@mui/x-data-grid-pro';
import {randomId} from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Box} from "@mui/material";
import {FaBars, FaFilter, FaPlus, FaUndo, FaChevronDown, FaCog} from "react-icons/fa";

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

const getRowsFromCurrentPage = ({ apiRef }) =>
    gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const ExportIcon = createSvgIcon(
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
    'SaveAlt',
);

function CustomToolbar(props) {
    const {setRows, setRowModesModel} = props;
    const apiRef = useGridApiContext();

    const buttonFirstProps = {
        size: 'small',
        startIcon: <ExportIcon />,
        endIcon: <FaChevronDown />
    };

    const buttonSecondProps = {
        size: 'small',
        startIcon: <FaCog />,
        endIcon: <FaChevronDown />
    };

    const buttonThirdProps = {
        size: 'small',
        startIcon: <FaUndo />
    };

    const handleReload = () => {
        window.location.reload();
    }

    const handleExport = (options) => apiRef.current.exportDataAsCsv(options);

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, {id, 'Штрихкод': 'RT00000000', 'Арендатор стойкоместа': 'M100 000 Mail.ru', 'Здание': 'Udomla-1 Удомля, корпус 1', 'Категория': 'вычислительное оборудования',  isNew: true}]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: {mode: GridRowModes.Edit, fieldToFocus: 'Штрихкод'},
        }));
    };

    return (
        <GridToolbarContainer>
            <Box sx={{width: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button sx={{color: '#7800ff'}} startIcon={<FaPlus/>} onClick={handleClick}>
                            Создать
                        </Button>
                        <Box sx={{
                            color: '#848890',
                            backgroundColor: '#f3f3f4',
                            marginLeft: '35px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '250px',
                            justifyContent: 'start',
                            padding: '1px',
                            border: '1px solid #f3f3f4',
                            borderRadius: '10px'
                        }}>
                            <GridToolbarFilterButton sx={{color: '#848890', paddingRight: '55%'}}/>
                            <FaChevronDown/>
                        </Box>
                    </Box>
                    <GridToolbarQuickFilter sx={{
                        width: '280px',
                        color: '#848890',
                        backgroundColor: '#f3f3f4',
                        padding: '3px 3px 3px 15px',
                        borderRadius: '10px',
                    }}/>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'end', marginTop: '40px', alignItems: 'center'}}>
                    <Box sx={{
                        backgroundColor: '#f5f5f5',
                        width: '180px',
                        height: '30px',
                        padding: '5px',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        verticalAlign: 'center'}}
                    >
                        <FaUndo onClick={() => handleReload()}  style={{ color: '#7800ff', cursor: 'pointer', width: '24px', height: '16px'}} />
                        <Button
                            {...buttonSecondProps}
                            sx={{color: 'black', padding: '0px'}}
                            onClick={() => alert('Тут будет настройка')}
                        />
                        <Button
                            {...buttonFirstProps}
                            sx={{color: 'black', padding: '0px'}}
                            onClick={() => handleExport({ getRowsToExport: getRowsFromCurrentPage })}
                        />
                    </Box>
                </Box>
            </Box>
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
                          Toolbar: CustomToolbar
                      }}
                      componentsProps={{
                          toolbar: {setRows, setRowModesModel},
                      }}
                      columns={columns} rows={rows} {...other} hideFooter disableColumnMenu/>
        </Box>
    );
}