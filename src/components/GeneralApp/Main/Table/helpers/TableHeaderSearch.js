import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    background: '#f3f3f4',
    border: '1px solid #f3f3f4',
    color: '#83878f',
    borderRadius: '8px',
    backgroundColor: '#f3f3f4',
    '&:hover': {
        backgroundColor: 'grey[800]',
    },
    marginLeft: 0,
    paddingLeft: '8px',
    width: '300px',
    height: '30px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '300px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: '2px',
    height: '100%',
    color: '#83878f',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#83878f',
    '& .MuiInputBase-input': {
        paddingLeft: '40px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    return (
        <Box>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Поиск"
                />
            </Search>
        </Box>
    );
}