import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SidebarConfig from './helpers/SidebarConfig';
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    sectionItemStyle: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        color: '#7e838c',
        fontSize: '16px',
        paddingLeft: '45px',
        paddingTop: '8px',
        paddingBottom: '8px',
        boxSizing: 'border-box',
        '&:hover': {
            backgroundColor: '#f5f5f5'
        },
        '&:active': {
            color: '#e33611'
        },
        cursor: 'pointer'
    },
    iconStyle: {
        marginRight: '15px'
    },
    navStyle: {
        marginTop: '20px'
    }
}));

export default function NavSection() {
    const classes = useStyles();

    return (
        <Box className={classes.navStyle}>
            {SidebarConfig.map((item, index) => (
                    <div style={{ backgroundColor: item.active ? "#f5f5f5" : 'none', color: item.active ? "black" : "none", fontWeight: item.fw ? "500" : "none"}} className={classes.sectionItemStyle} key={index}>
                        <div style={{color: item.mode ? "#e33611" : "none"}} className={classes.iconStyle}>{item.icon}</div>
                        <div style={{color: item.mode ? "#e33611" : "none"}}>{item.title}</div>
                    </div>
                )
            )}
        </Box>
    )
}