import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { FaPowerOff } from "react-icons/fa";
import SelectMenu from '../Header/helpers/SelectMenu';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
    layoutHeader: {
        width: '100%',
        height: '60px',
        borderBottom: '2px solid #cececf',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    },
    textHeader: {
        color: '#7e838c',
        marginRight: '8px'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutHeader}>
            <Box className={classes.textHeader}>Константинопольский К.А.</Box>
            <Avatar style={{ width: '25px', height: '25px', marginRight: '30px', cursor: 'pointer' }} src="/broken-image.jpg" />
            <SelectMenu />
            <FaPowerOff style={{ width: '30px', height: '30px', color: '#e33611', marginRight: '30px', marginLeft: '30px', cursor: 'pointer' }}  />
        </Box>
    )
}