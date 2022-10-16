import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { FaPlus } from "react-icons/fa";
import TableHeaderFilter from './helpers/TableHeaderFilter';
import TableHeaderSearch from './helpers/TableHeaderSearch';


const useStyles = makeStyles((theme) => ({
    layoutTableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box'
    },
    leftTableHeader: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    leftTableText: {
        marginLeft: '10px',
        fontSize: '18px',
        color: '#7800ff',
        cursor: 'pointer',
        marginRight: '50px'
    },
    rightTableHeader: {

    }
}));

export default function Table() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutTableHeader}>
            <Box className={classes.leftTableHeader}>
                <FaPlus style={{ color: '#7800ff', cursor: 'pointer', width: '20px', height: '20px'}} />
                <Box className={classes.leftTableText}>Создать</Box>
                <TableHeaderFilter />
            </Box>
            <Box className={classes.rightTableHeader}>
                <TableHeaderSearch />
            </Box>
        </Box>
    )
}