import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import theme from '../helper/theme'; // Adjust the import path if needed

const Contact = ({ setCurrentPage }) => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 4, textAlign: 'center' }}
            >
                Contact Me
            </Typography>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Your Name"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    label="Your Email"
                    variant="outlined"
                    required
                    fullWidth
                    type="email"
                />
                <TextField
                    label="Your Message"
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ alignSelf: 'flex-end', textTransform: 'none' }}
                >
                    Send Message
                </Button>
            </Box>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                    onClick={() => setCurrentPage('home')}
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none' }}
                >
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
