import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import TableHeader from './TableHeader';
import TableSettings from './TableSettings';
import TableMain from './TableMain';


const useStyles = makeStyles((theme) => ({
    layoutTable: {
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        marginTop: '20px',
        paddingBottom: '20px'
    },
}));

export default function Table() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutTable}>
            <TableHeader />
            <TableSettings />
            <TableMain />
        </Box>
    )
}