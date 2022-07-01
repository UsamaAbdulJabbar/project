import React, { useState} from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SmInput from "../components/smInput";
import SmButton from "../components/smButton";
import { Link } from "react-router-dom";
import { sendData, signUpUser } from "../config/firebase/firebaseMethods";
import { useNavigate } from 'react-router-dom';


function Signup (){

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    
    
    const [loader, setLoader] = useState(false);


    const SignUpData = ()=>{
        const obj = {
            password,
            email,
            userName,
        }
        if(!email){
            alert('Email is required');
            return
        };
        if(!password || password.length < 6){
            alert("Password is requires and must be greater then 6 character")
            return;
        }
        
        console.log(obj);
        signUpUser(obj).then(()=>{
            alert("User Create Successfully")
        }).catch((err)=>{
            alert(err);
        })
       
        //SignUp Firebase Authentication
        
        

    }


    return(
        <>
        
        <Typography variant="h1">Signup page</Typography>


        <Box sx={{marginTop:"50px"}}>
            <Box sx={{padding:"20px"}}>
                <SmInput onChange={(e)=>setUserName(e.target.value)} label='Username' type='text' /> 
            </Box>
            <Box sx={{padding:"20px"}}>
                <SmInput onChange={(e)=>setEmail( e.target.value)}  label='Email' type='email' /> 
            </Box>
            <Box sx={{padding:"20px"}}>
                <SmInput onChange={(e)=>setPassword(e.target.value)}  label='Password' type='password' /> 
            </Box>
            <Box sx={{padding:"20px"}}>
            Already have account ?  <Link to='/'>Login
                
                </Link> 
            </Box>

            <Box>
                <SmButton loading={loader} label='SignIn' variant='contained' onClick={SignUpData} />
            </Box>
        </Box>
        
        
        </>
    )
}


export default Signup;