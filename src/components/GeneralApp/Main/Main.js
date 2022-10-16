import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import Table from './Table/Table';

const useStyles = makeStyles((theme) => ({
    layoutMain: {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        height: '100%',
    },
    mainTitle: {
        fontSize: '32px',
        fontWeight: '600'
    }
}));

export default function Main() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutMain}>
            <Box className={classes.mainTitle}>Оборудование</Box>
            <Table />
        </Box>
    )
}