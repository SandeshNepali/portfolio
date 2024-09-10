import {
    Box,
    useTheme,
    useMediaQuery,
    Stack,
    Typography,
    Button,
    Backdrop,
    CircularProgress,
    IconButton,
} from "@mui/material";
import Profile from "./images/profile.svg";
import { useState, useEffect } from "react";
import { Facebook, LinkedIn, Instagram, Twitter } from "@mui/icons-material";
import '@fontsource/poppins';

const Home = ({ setCurrentPage }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isLoading, setIsLoading] = useState(true);

    // Text typing animation state
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    const [animationCount, setAnimationCount] = useState(0);
    const staticText = "Hello, I am Sandesh Nepali.";
    const typingText = " a software developer...";

    // Typing effect
    useEffect(() => {
        if (!isLoading) {
            if (animationCount < 3) {
                if (index < typingText.length) {
                    const timeout = setTimeout(() => {
                        setTypedText((prev) => prev + typingText.charAt(index));
                        setIndex(index + 1);
                    }, 100);
                    return () => clearTimeout(timeout);
                } else if (index === typingText.length) {
                    const timeout = setTimeout(() => {
                        setTypedText("");
                        setIndex(0);
                        setAnimationCount((prev) => prev + 1);
                    }, 1000);
                    return () => clearTimeout(timeout);
                }
            } else {
                setTypedText(typingText);
            }
        }
    }, [index, typingText, animationCount, isLoading]);

    return (
        <>
            <Backdrop
                open={isLoading}
                sx={{
                    zIndex: theme.zIndex.drawer + 1,
                    color: "#fff",
                    backdropFilter: "blur(6px)",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Stack
                direction={isMobile ? "column-reverse" : "row"}
                spacing={isMobile ? 3 : 6}
                sx={{
                    p: { xs: 3, sm: 5, md: 8, lg: 12 },
                    color: theme.palette.common.white,
                }}
            >
                {/* Intro Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: isMobile ? "center" : "flex-start",
                        textAlign: isMobile ? "center" : "left",
                        pl: isMobile ? 0 : { sm: 4, lg: 10 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",  // Use Poppins here
                            fontWeight: 700,
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                            lineHeight: 1.2,
                            color: theme.palette.common.white,
                            textShadow: `6px 6px 10px ${theme.palette.grey[900]}`,
                            transition: "transform 1.2s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.08)",
                            },
                        }}
                    >
                        {staticText}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",  // Use Poppins here as well
                            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                            fontWeight: 400,
                            color: theme.palette.grey[300],
                            mt: 2,
                            display: "inline-block",
                            borderRight: "2px solid",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            animation: "blink-caret 0.75s step-end infinite",
                        }}
                    >
                        I am {typedText}
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",  // Apply here for consistency
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1, sm: 1.2 },
                            mt: { xs: 3, sm: 4 },
                            bgcolor: theme.palette.primary.main,
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                bgcolor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                            },
                        }}
                        onClick={() => setCurrentPage("projects")}
                    >
                        View Projects
                    </Button>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: isMobile ? "center" : "flex-start",
                            gap: 2.5,
                        }}
                    >
                        {[
                            { href: "https://www.facebook.com/yourprofile", icon: <Facebook />, label: "Facebook" },
                            { href: "https://www.linkedin.com/in/yourprofile", icon: <LinkedIn />, label: "LinkedIn" },
                            { href: "https://www.instagram.com/yourprofile", icon: <Instagram />, label: "Instagram" },
                            { href: "https://twitter.com/yourprofile", icon: <Twitter />, label: "Twitter" }
                        ].map(({ href, icon, label }) => (
                            <IconButton
                                key={label}
                                component="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                sx={{ color: theme.palette.common.white }}
                            >
                                {icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>

                {/* Profile Image Section */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={Profile}
                        alt="Profile"
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                        sx={{
                            width: isMobile ? "80%" : "90%",
                            maxWidth: "450px",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "12px",
                            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.4)",
                            transition: "transform 1.2s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    />
                </Box>
            </Stack>

            <style jsx="true">{`
                @keyframes blink-caret {
                    from, to { border-color: transparent; }
                    50% { border-color: white; }
                }
            `}</style>
        </>
    );
};

export default Home;
