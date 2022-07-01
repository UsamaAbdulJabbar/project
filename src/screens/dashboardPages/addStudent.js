import { Typography,Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmButton from "../../components/smButton";
import SmInput from "../../components/smInput";
import {  sendData } from "../../config/firebase/firebaseMethods";




function AddStudentData(){
            const [studentObj, setStudentObj] = useState({});


            const Save = ()=>{
                if (!studentObj.email) {
                    alert("Email is required.");
                    return
                  };
                  if (!studentObj.password || studentObj.password.length < 6) {
                    alert("password is required and Password must be greater then 6 character");
                    return
                  };

                  console.log(studentObj)

                  sendData(studentObj,'StudentData').then(()=>{
                    alert("Data Save Successfully");
                  }).catch((err)=>{
                    console.log(err)
                  })

            }

            const newStudent = ()=>{
               window.location.reload();
            }
            const navigate  = useNavigate();
            const ViewData=()=>{
                navigate("/viewStudentData");
            }

    return (
        <>
        <Typography variant="h1">
            Add Student Page
        </Typography>
        <hr></hr>

        <Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput onChange={(e)=> setStudentObj({...studentObj, name: e.target.value})} label="Student Name" type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, fatherName: e.target.value})} label="Father  Name" type="text" /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, class: e.target.value})} label="CLass" type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, section: e.target.value})} label="Section" type='text' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, contact: e.target.value})} label="Contact" type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, cnic: e.target.value})} label="CNIC" type='text' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, email: e.target.value})} label="Email" type="email" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, password: e.target.value})} label="Password" type='password' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  onChange={(e)=> setStudentObj({...studentObj, address: e.target.value})} label="Address" type="text" /></Box>
                    
            </Box>


            <Box>
                <Box>
                    <SmButton onClick={Save} label="Save" variant="contained" />
                </Box>
                <Box sx={{marginTop:"20px"}}>
                    <SmButton onClick={newStudent} label="New Student" variant="contained" />
                </Box>


                <Box sx={{marginTop:"20px"}}>
                    <SmButton onClick={ViewData} label="View Data" variant="contained" />
                </Box>
            </Box>


        </Box>
        
        </>
    )
}


export default AddStudentData;