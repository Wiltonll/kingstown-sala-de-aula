import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>About</h1>
                </Box>
            </Box>
        </>
    );
}

export default About;