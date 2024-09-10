import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'; // Importing MUI components

const CursorBall = () => {
    const [bubbles, setBubbles] = useState([]);

    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;

        // Create a new bubble object
        const newBubble = {
            id: Math.random(),
            x,
            y
        };

        setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

        // Remove bubble after 1 second
        setTimeout(() => {
            setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== newBubble.id));
        }, 1000);
    };

    useEffect(() => {
        // Attach mousemove event
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up event
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {bubbles.map((bubble) => (
                <Box
                    key={bubble.id}
                    sx={{
                        position: 'absolute',
                        top: `${bubble.y}px`,
                        left: `${bubble.x}px`,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(173, 216, 230, 0.8)', // Light blue
                        animation: 'bubble-animation 1s ease-out forwards',
                    }}
                />
            ))}

            {/* Define the keyframes animation directly in sx prop */}
            <style>{`
        @keyframes bubble-animation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          80% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
        </>
    );
};

export default CursorBall;
