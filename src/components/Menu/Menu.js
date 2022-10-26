import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import HeaderMenu from "./HeaderMenu";
import NewNavSection from './NewNavSection';

const useStyles = makeStyles((theme) => ({
    layoutMenu: {
        width: '20%',
        height: '100%',
    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutMenu}>
            <HeaderMenu />
            <NewNavSection />
        </Box>
    )
}