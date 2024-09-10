import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton, Avatar } from '@mui/material';
import { Chat as ChatIcon, Close as CloseIcon } from '@mui/icons-material';
import theme from '../../helper/theme';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: 'Hi! How can I help you today?', from: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, from: 'user' };
        const botResponse = getBotResponse(input);

        setMessages([...messages, userMessage, botResponse]);
        setInput('');
    };

    const getBotResponse = (input) => {
        let response = 'Sorry, I didn\'t understand that.';
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('projects')) {
            response = 'You can find my projects in the Projects section.';
        } else if (lowerInput.includes('contact')) {
            response = 'Feel free to reach out through the Contact section.';
        } else if (lowerInput.includes('about')) {
            response = 'You can learn more about me in the About section.';
        } else if (lowerInput.includes('services') || lowerInput.includes('skills')) {
            response = 'I specialize in web development using React, C++, and Python.';
        } else if (lowerInput.includes('experience') || lowerInput.includes('background')) {
            response = 'I have a solid foundation in web development from studying at Solano Community College and UC Davis.';
        } else if (lowerInput.includes('education')) {
            response = 'I am currently studying at UC Davis, having previously studied at Solano Community College.';
        } else if (lowerInput.includes('hobbies') || lowerInput.includes('interests')) {
            response = 'I enjoy learning new things and exploring different topics.';
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            response = 'Hello! How can I assist you today?';
        } else if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
            response = 'You\'re welcome! If you have any more questions, feel free to ask.';
        }

        return { text: response, from: 'bot' };
    };



    return (
        <Box>
            {isOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        width: 300,
                        height: 400,
                        boxShadow: theme.shadows[3],
                        borderRadius: 2,
                        overflow: 'hidden',
                        backgroundColor: theme.palette.background.paper,
                    }}
                >
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            p: 2,
                        }}
                    >
                        <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
                            {messages.map((msg, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: msg.from === 'bot' ? 'flex-start' : 'flex-end',
                                        mb: 1,
                                    }}
                                >
                                    {msg.from === 'bot' && (
                                        <Avatar
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                mr: 1,
                                                bgcolor: theme.palette.primary.main,
                                                color: 'white',
                                            }}
                                        >
                                            B
                                        </Avatar>
                                    )}
                                    {msg.from === 'user' && (
                                        <Avatar
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                mr: 1,
                                                bgcolor: theme.palette.secondary.main,
                                                color: 'white',
                                            }}
                                        >
                                            U
                                        </Avatar>
                                    )}
                                    <Typography
                                        sx={{
                                            textAlign: msg.from === 'bot' ? 'left' : 'right',
                                            color: msg.from === 'bot' ? theme.palette.primary.main : theme.palette.text.secondary,
                                            display: 'inline-block',
                                            maxWidth: '75%',
                                        }}
                                    >
                                        {msg.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <Button
                                variant="contained"
                                sx={{ ml: 1 }}
                                onClick={handleSend}
                            >
                                Send
                            </Button>
                        </Box>
                    </Paper>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            )}
            {!isOpen && (
                <IconButton
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        boxShadow: theme.shadows[3],
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        },
                    }}
                    onClick={() => setIsOpen(true)}
                >
                    <ChatIcon />
                </IconButton>
            )}
        </Box>
    );
};

export default Chatbot;
