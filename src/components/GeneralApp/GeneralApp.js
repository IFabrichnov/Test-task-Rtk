import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import Header from './Header/Header';
import Main from './Main/Main';

const useStyles = makeStyles((theme) => ({
    layoutApp: {
        width: '100%',
        height: '100%',
        borderLeft: '2px solid #cececf'
    }
}));

export default function GeneralApp() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutApp}>
            <Header />
            <Main />
        </Box>
    )
}