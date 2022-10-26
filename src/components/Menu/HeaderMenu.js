import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import logo from '../../logo.png';

const useStyles = makeStyles((theme) => ({
    layoutHeader: {
        display: 'flex',
        justifyContent: 'start',
        paddingLeft: '45px',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#FFFFF',
    },
    logoStyle: {
        width: '50px',
        height: '50px'
    },
    textStyle: {
        fontWeight: '500',
        color: 'black',
        marginRight: '20px'
    }
}));

export default function HeaderMenu() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutHeader}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Box component="img" src={logo} className={classes.logoStyle} />
            <Box className={classes.textStyle}>
                ИНВЕНТАРИЗАЦИЯ
            </Box>
        </Box>
    )
}