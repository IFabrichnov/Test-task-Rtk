import React from 'react';
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { FaUndo, FaChevronDown, FaCog, FaDownload } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
    layoutSettings: {
        display: 'flex',
        justifyContent: 'end',
        padding: '20px',
    },
    settingsStyle: {
        backgroundColor: '#f5f5f5',
        width: '180px',
        height: '30px',
        padding: '5px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        verticalAlign: 'center'
    }
}));

export default function TableSettings() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutSettings}>
            <Box className={classes.settingsStyle}>
                <FaUndo style={{ color: '#7800ff', cursor: 'pointer'}} />
                <FaCog style={{ cursor: 'pointer'}} />
                <FaChevronDown style={{ cursor: 'pointer'}} />
                <FaDownload style={{ cursor: 'pointer'}} />
                <FaChevronDown style={{ cursor: 'pointer'}} />
            </Box>
        </Box>
    )
}