import React, { useCallback } from 'react';
import { Box, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Work as WorkIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const NavBar = ({ setCurrentPage }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const pages = [
        { name: 'Home', value: 'home', icon: <HomeIcon /> },
        { name: 'About', value: 'about', icon: <InfoIcon /> },
        { name: 'Projects', value: 'projects', icon: <WorkIcon /> },
        { name: 'Contact', value: 'contact', icon: <PhoneIcon /> },
    ];

    const handleClick = useCallback((value) => {
        setCurrentPage(value);
    }, [setCurrentPage]);

    return (
        <Box
            sx={{
                position: 'fixed',
                left: isMobile ? 'auto' : 0,
                top: isMobile ? 0 : '50%',
                right: isMobile ? 0 : 'auto',
                transform: isMobile ? 'none' : 'translateY(-50%)',
                width: isMobile ? 'auto' : 'auto',
                height: isMobile ? 'auto' : '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backgroundColor: isMobile ? 'transparent' : 'inherit',
                padding: isMobile ? '20px 0' : '20px',
                borderBottom: isMobile ? `1px solid ${theme.palette.grey[700]}` : 'none',
                borderRadius: isMobile ? 0 : '8px',
            }}
        >
            {pages.map((page) => (
                <Tooltip title={page.name} arrow placement={isMobile ? 'bottom' : 'right'} key={page.value}>
                    <IconButton
                        onClick={() => handleClick(page.value)}
                        sx={{
                            width: isMobile ? 36 : 48,
                            height: isMobile ? 36 : 48,
                            margin: isMobile ? '5px 16px' : '8px 0',
                            color: theme.palette.text.primary,
                            transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                            '&:hover': {
                                transform: 'scale(1.2)',
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                        aria-label={page.name}
                    >
                        {page.icon}
                    </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
};

export default NavBar;
