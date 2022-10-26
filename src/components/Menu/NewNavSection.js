import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MenuItem from './MenuItem';
import {
    FaClipboardList,
    FaFolderOpen,
    FaHdd,
    FaCheckSquare
} from "react-icons/fa";

const data = [
    { icon: <FaClipboardList />, label: 'Оформление', subtitles: [
            {name: 'Аватар'}, {name: 'Таблица'}
        ] },
    { icon: <FaCheckSquare />, label: 'Инвентаризация', subtitles: [
            {name: 'Оборудование'}, {name: 'Стойко место'}, {name: 'Инвантаризации'}
        ]},
    { icon: <FaFolderOpen />, label: 'Мастер справочники', subtitles: [
            {name: 'Площадки'}, {name: 'Задания'}, {name: 'Залы'}, {name: 'Арендаторы'}
        ]},
    { icon: <FaHdd />, label: 'Учет оборудования', subtitles: [
            {name: 'Категория оборудования'}, {name: 'Типы оборудования'}, {name: 'Производители'}, {name: 'Модели оборудования'}
        ] },
];

export default function NewNavSection() {

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider
                theme={createTheme({
                    components: {
                        MuiListItemButton: {
                            defaultProps: {
                                disableTouchRipple: true,
                            },
                        },
                    },
                    palette: {
                        mode: 'dark',
                        primary: { main: 'rgb(102, 157, 246)' },
                        background: { paper: 'rgb(5, 30, 52)' },
                    },
                })}
            >
                <Paper elevation={0} sx={{ width: '100%', margin: 'auto' }}>

                    {data.map((item, index) => (
                    <MenuItem item={item} key={index} />
                    ))}
                </Paper>
            </ThemeProvider>
        </Box>
    );
}