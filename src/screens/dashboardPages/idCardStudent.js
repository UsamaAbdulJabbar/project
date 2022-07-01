import { Typography,Box } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux/es/hooks/useSelector';



function IdCardStudent(){

    
    return (
        <>
        <Typography variant="h1">
            ID Card Student Page
        </Typography>
        
        <Box>
            <Box>
                <Typography>
                        {Object.name}
                </Typography>
            </Box>
        </Box>

        
        </>
    )
}


export default IdCardStudent;