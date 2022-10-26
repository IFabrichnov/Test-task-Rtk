import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});


export default function MenuItem(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <Box>
            <FireNav component="nav" disablePadding>
                <Box
                    sx={{
                        bgcolor: '#ffffff',
                        color: open ? '#e33611' : '#7e838c',
                        pb: open ? 2 : 0,
                        width: '100%',
                        boxSizing: 'border-box'

                    }}
                >
                    <ListItemButton
                        alignItems="center"
                        onClick={() => setOpen(!open)}
                        sx={{
                            px: 3,
                            pt: 1,
                            pb: 1,
                            '&:hover': {
                                backgroundColor: '#f5f5f5'
                            },
                            '&:active': {
                                color: '#e33611'
                            },
                        }}
                    >
                        <ListItemIcon sx={{ color: 'inherit', paddingLeft: '20px' }}>
                            {props.item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={`${props.item.label}`}
                            primaryTypographyProps={{
                                fontSize: 15,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                            }}
                            secondaryTypographyProps={{
                                noWrap: true,
                                fontSize: 12,
                                lineHeight: '16px',
                                color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                            }}
                            sx={{ my: 0 }}
                        />
                    </ListItemButton>

                    {open &&
                    props.item.subtitles.map((e) => (
                        <ListItemButton
                            key={e.name}
                            sx={{ py: 0, minHeight: 32, color: '#7e838c', '&:hover': {
                                    backgroundColor: '#f5f5f5'
                                },
                                '&:active': {
                                    color: '#000000'
                                } }}
                        >
                            <Box sx={{color: '#ffffff', width: '54px', height: '24px'}}></Box>
                            <ListItemText
                                primary={e.name}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                            />
                        </ListItemButton>
                    ))}
                </Box>
            </FireNav>
        </Box>
    );
}