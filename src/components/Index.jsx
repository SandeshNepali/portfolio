import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Home from './Home';
import theme from '../helper/theme';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import NavBar from './NavBar';
import Chatbot from './creativity/Chatbot';

export const Layout = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage} />;
            case 'about':
                return <About setCurrentPage={setCurrentPage} />;
            case 'contact':
                return <Contact setCurrentPage={setCurrentPage} />;
            case 'projects':
                return <Projects setCurrentPage={setCurrentPage} />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    };



    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ userSelect: 'none' }}>
                    {renderContent()}
                </Box>

                <NavBar setCurrentPage={setCurrentPage} />
                <Chatbot />
            </ThemeProvider >
        </>
    );
};
