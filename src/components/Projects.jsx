import React from 'react';
import { Container, Typography, Card, CardContent, Avatar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../helper/theme'; // Adjust the import path if needed

const projects = [
    {
        title: 'Napa',
        description: 'A website for the association.',
        link: 'https://sandeshnepali.github.io/napa/',
    },
    {
        title: 'Project Two',
        description: 'Brief description of Project Two.',
        link: '/project-two',
    },
    {
        title: 'Project Three',
        description: 'Brief description of Project Three.',
        link: '/project-three',
    },
    {
        title: 'Project Four',
        description: 'Brief description of Project Four.',
        link: '/project-four',
    },
    // Add more projects as needed
];

// Styled component for the project container using CSS Grid for Masonry layout
const ProjectsWrapper = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(6),
}));

// Styled card component for better hover effects and fluidity
const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-10px) scale(1.05)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
    },
}));

// Styled button for Learn More
const LearnMoreButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontSize: '1rem',
    padding: theme.spacing(1.5, 3),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'translateY(-2px)',
    },
}));

const Projects = ({ setCurrentPage }) => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontWeight: 'bold',
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    mb: 6,
                }}
            >
                My Projects
            </Typography>

            <ProjectsWrapper>
                {projects.map((project, index) => (
                    <StyledCard key={index} sx={{ minHeight: '400px' }}>
                        {/* Replace CardMedia with Avatar */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: { xs: '180px', sm: '220px' },
                                bgcolor: 'primary.light',
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                    bgcolor: theme.palette.primary.main,
                                    fontSize: '3rem',
                                    color: 'white',
                                }}
                            >
                                {project.title.charAt(0)}
                            </Avatar>
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary,
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: theme.palette.primary.main,
                                    },
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {project.description}
                            </Typography>
                            <LearnMoreButton
                                href={project.link}
                                variant="contained"
                                color="primary"
                            >
                                Learn More
                            </LearnMoreButton>
                        </CardContent>
                    </StyledCard>
                ))}
            </ProjectsWrapper>

            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Button
                    onClick={() => setCurrentPage('home')}
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none', px: 4, py: 1.5 }}
                >
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default Projects;
