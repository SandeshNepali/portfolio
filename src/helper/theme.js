// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#5367b2', // Your background color
        },
        primary: {
            main: '#3f51b5', // Primary color for the app bar
        },
    },
    // Customize other theme settings here
});

export default theme;
