import React from 'react';
import {Box} from "@mui/material"
import {
    FaClipboardList,
    FaFolderOpen,
    FaHdd,
    FaCheckSquare
}from "react-icons/fa";

const emptyIcon = <Box sx={{color: '#ffffff', width: '16px', height: '16px'}}></Box>;

const sidebarConfig = [
    { title: 'Оформление', icon: <FaClipboardList />, fw: 'yes'},
    { title: 'Инвентаризация', icon: <FaCheckSquare />, mode: 'active', fw: 'yes' },
    { title: 'Оборудование', icon: emptyIcon, active: 'using' },
    { title: 'Стойко место', icon: emptyIcon },
    { title: 'Инвантаризации', icon: emptyIcon },
    { title: 'Мастер справочники', icon: <FaFolderOpen />, fw: 'yes' },
    { title: 'Площадки', icon: emptyIcon },
    { title: 'Задания', icon: emptyIcon },
    { title: 'Залы', icon: emptyIcon },
    { title: 'Арендаторы', icon: emptyIcon },
    { title: 'Учет оборудования', icon: <FaHdd />, fw: 'yes' },
    { title: 'Категория оборудования', icon: emptyIcon },
    { title: 'Типы оборудования', icon: emptyIcon },
    { title: 'Производители', icon: emptyIcon },
    { title: 'Модели оборудования', icon: emptyIcon },
];

export default sidebarConfig;
