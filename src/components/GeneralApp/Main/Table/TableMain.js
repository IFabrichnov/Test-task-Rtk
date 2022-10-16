import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaBars, FaTrash } from "react-icons/fa";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#f2f6ff',
        color: '#515863',
        fontWeight: '600'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#ffffff',
    }
}));

function createData(icon, barcode, tenant, build, hall, place, unit, category, type, model, trash) {
    return {icon, barcode, tenant, build, hall, place, unit, category, type, model, trash};
}

const rows = [
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'сервер', '7xX57', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'дисковое устройство', '3PAR StoreServ 8450', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'сервер', '7xX57', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'дисковое устройство', '3PAR StoreServ 8450', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'сервер', '7xX57', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
    createData(<FaBars style={{cursor: 'pointer'}}/>, <Box style={{color: '#7800ff', cursor: 'pointer'}}>RT00068158</Box>, 'M100 000 Mail.ru', 'Udomla-1 Удомля, корпус 1', '20H4 Секция 1 - Модуль 4', '20H4D050 4/4/5', '22', 'вычислительное оборудования', 'дисковое устройство', '3PAR StoreServ 8450', <FaTrash style={{color: '#bbbdc2', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px', cursor: 'pointer'}} />),
];

export default function CustomizedTables() {
    return (
        <TableContainer sx={{padding: '20px', boxSizing: 'border-box', boxShadow: 'none'}} component={Paper}>
            <Table sx={{minWidth: 700, border: '2px solid #f5f5f5'}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ width: '15px'}}></StyledTableCell>
                        <StyledTableCell style={{ width: '100px'}}>Штрихкод</StyledTableCell>
                        <StyledTableCell style={{ width: '200px'}}>Арендатор стойкоместа</StyledTableCell>
                        <StyledTableCell style={{ width: '150px'}}>Здание</StyledTableCell>
                        <StyledTableCell style={{ width: '120px'}}>Зал</StyledTableCell>
                        <StyledTableCell style={{ width: '90px'}}>Стойкоместо</StyledTableCell>
                        <StyledTableCell style={{ width: '50px'}}>Юнит</StyledTableCell>
                        <StyledTableCell style={{ width: '150px'}}>Категория</StyledTableCell>
                        <StyledTableCell style={{ width: '100px'}}>Тип</StyledTableCell>
                        <StyledTableCell style={{ width: '150px'}}>Модель</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.barcode}>
                            <StyledTableCell component="th" scope="row">{row.icon}</StyledTableCell>
                            <StyledTableCell>{row.barcode}</StyledTableCell>
                            <StyledTableCell>{row.tenant}</StyledTableCell>
                            <StyledTableCell>{row.build}</StyledTableCell>
                            <StyledTableCell>{row.hall}</StyledTableCell>
                            <StyledTableCell>{row.place}</StyledTableCell>
                            <StyledTableCell>{row.unit}</StyledTableCell>
                            <StyledTableCell>{row.category}</StyledTableCell>
                            <StyledTableCell>{row.type}</StyledTableCell>
                            <StyledTableCell>{row.model}</StyledTableCell>
                            <StyledTableCell>{row.trash}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}