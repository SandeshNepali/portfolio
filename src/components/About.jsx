import React from 'react';
import { Container, Typography, Box, Divider, Avatar, Chip } from '@mui/material';
import theme from '../helper/theme'; // Adjust the import path if needed
import '@fontsource/poppins'; // Import Poppins font

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
            {/* Main Title */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 8,
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                    paddingBottom: '12px',
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        color: theme.palette.primary.dark,
                        textTransform: 'uppercase',
                        fontSize: { xs: '2rem', md: '2.5rem' }, // Responsive font size
                    }}
                >
                    About Me
                </Typography>
            </Box>

            {/* Profile Section with Avatar and Text Side by Side */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on large
                    alignItems: 'center',
                    justifyContent: 'space-between', // Adjust spacing between avatar and text
                    mb: 8,
                    gap: 12, // More gap between avatar and text
                    px: { xs: 2, md: 4 }, // Padding for smaller screens
                }}
            >
                <Avatar
                    sx={{
                        width: 140,
                        height: 140,
                        backgroundColor: theme.palette.primary.dark,
                        color: '#fff',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        border: `3px solid ${theme.palette.secondary.main}`,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                        },
                    }}
                >
                    S
                </Avatar>

                <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '700px' }}>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            color: theme.palette.primary.dark,
                            mb: 3,
                            fontSize: { xs: '1.5rem', md: '1.8rem' }, // Responsive font size
                        }}
                    >
                        Hi, I'm Sandesh Nepali
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            color: theme.palette.text.primary,
                            lineHeight: 1.75,
                            fontSize: { xs: '1rem', md: '1.125rem' }, // Responsive font size
                            textAlign: { xs: 'center', md: 'left' }, // Center for small, left for large screens
                        }}
                    >
                        I’m a passionate web developer studying at UC Davis with a solid foundation from Solano Community College.
                        My fascination with technology has evolved into a dedication to creating engaging, user-friendly web applications.
                        <br /><br />
                        From a keen interest in how things work, I’ve transformed into a creator of dynamic solutions that make a difference.
                        My skills include React, C++, and Python. I enjoy exploring new technologies and staying ahead of trends in web development.
                    </Typography>
                </Box>
            </Box>

            {/* Divider with Custom Style */}
            <Divider
                sx={{
                    mb: 6,
                    borderColor: theme.palette.divider,
                    borderWidth: '2px',
                    opacity: 0.8,
                }}
            />

            {/* Personal Interests Section with Icon Chips */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold',
                        color: theme.palette.primary.dark,
                        mb: 4,
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                    }}
                >
                    A Few Things About Me
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 1.5, // Larger gap between chips
                        mb: 4,
                    }}
                >
                    <Chip label="Books 📚" color="primary" sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }} />
                    <Chip label="Hiking 🏞️" color="secondary" sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }} />
                    <Chip label="Cooking 🍳" color="success" sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }} />
                    <Chip label="Learning 📘" color="info" sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }} />
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: theme.palette.text.primary,
                        lineHeight: 1.75,
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: { xs: '1rem', md: '1.125rem' }, // Responsive font size
                        textAlign: 'center',
                    }}
                >
                    When I’m not coding, I’m diving into new books, exploring the outdoors, or experimenting with culinary delights. I believe that a well-rounded life fuels both personal and professional growth.
                    <br /><br />
                    Feel free to check out my projects to see some of my proudest work. I’d be delighted to connect or collaborate, so don’t hesitate to reach out!
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
