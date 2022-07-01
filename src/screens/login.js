import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SmInput from "../components/smInput";
import SmButton from "../components/smButton";
import { Link } from "react-router-dom";
import { login } from "../config/firebase/firebaseMethods";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {useNavigate} from "react-router-dom";


function Login (){
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const [loader ,setLoader] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UserLogin = ()=>{
        const obj = {
            email,
            password,
        };
        if(!email){
            alert('Email is required');
            return
        };
        if(!password || password.length < 6){
            alert("Password is requires and must be greater then 6 character")
            return;
        }
        setLoader(true);
        login(obj).then((res)=>{
            console.log(res);
            alert("Login Successfully");
            setLoader(false);
            dispatch({
                type : "DATAFROMLOGIN",
                payload : res,
            })
            navigate("/dashboard");
        }).catch((err)=>{
            console.log(err)
            setLoader(false);
        })

        

        
    

        



        
    }

    return(
        <>
        
        <Typography variant="h1">Login page</Typography>
        
        <Box sx={{marginTop:"50px"}}>
            
            <Box sx={{padding:"20px"}}>
                <SmInput  onChange={(e)=>setEmail(e.target.value)}  label='Email' type='email' /> 
            </Box>
            <Box sx={{padding:"20px"}}>
                <SmInput onChange={(e)=>setPassword(  e.target.value)}   label='Password' type='password' /> 
            </Box>
            <Box sx={{padding:"20px"}}>
            Don't have an account ?  <Link to='/signUp'>
               Create Account
                </Link> 
            </Box>

            <Box>
                <SmButton loading={loader} label='Login' variant='contained' onClick={UserLogin} />
            </Box>
        </Box>
        
        </>
    )
}


export default Login;