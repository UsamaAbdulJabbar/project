import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux/es/exports";
import {useNavigate} from "react-router-dom";
import { SmartButton } from "@mui/icons-material";
import { signoutUser } from "../config/firebase/firebaseMethods";
import SmButton from "../components/smButton";
import ResponsiveAppBar from "../components/layouts/appBar";
import ResponsiveDrawer from "../components/layouts/dashboardLayout";


function Dashboard(){
    const userFromRedux = useSelector((a)=>a.user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(userFromRedux){
            
        }else{
            navigate("/login")
        }
    },[])

  

    


    return(
        <>
        
        {/* <Typography variant="h1">Dashboard page</Typography>
        <hr></hr>
        <Box>
            <Typography variant='h2'>User Information</Typography>
            <Box>
                <Typography variant="h4">
                 Name :   {userFromRedux.userName}
                </Typography>
                <Typography variant="h4">
                 Email :   {userFromRedux.email}
                </Typography>
                <Typography variant="h4">
                 Password :   {userFromRedux.password}
                </Typography>
            </Box>

            
        </Box> */}
            
           

            <Box >
                <ResponsiveDrawer />
            </Box>
        
        </>
    )
}


export default Dashboard;