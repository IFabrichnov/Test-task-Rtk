import './App.css';
import { Box } from "@mui/material";
import Menu from "./components/Menu/Menu";
import GeneralApp from './components/GeneralApp/GeneralApp';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    layoutApp: {
        display: 'flex',
        justifyContent: 'start',
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Box className={classes.layoutApp}>
            <Menu/>
            <GeneralApp/>
        </Box>
    );
}

export default App;
