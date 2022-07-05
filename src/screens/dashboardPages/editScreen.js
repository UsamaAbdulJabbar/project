import { Typography,Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmButton from "../../components/smButton";
import SmInput from "../../components/smInput";
import {  sendData } from "../../config/firebase/firebaseMethods";




function EditStudentData(){
            const [studentObj, setStudentObj] = useState({});


            const Save = (id)=>{
                if (!studentObj.email) {
                    alert("Email is required.");
                    return
                  };
                  if (!studentObj.password || studentObj.password.length < 6) {
                    alert("password is required and Password must be greater then 6 character");
                    return
                  };

                  console.log(studentObj)

                  sendData(studentObj,'StudentData',id).then(()=>{
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

            const DATAFROMTABLE = useSelector((a)=>a);

            console.log(DATAFROMTABLE.student)

    return (
        <>
        <Typography variant="h1">
           Edit Student Data Page
        </Typography>
        <hr></hr>

        <Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.name}  onChange={(e)=> setStudentObj({...studentObj, name: e.target.value})}   type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.fatherName}  onChange={(e)=> setStudentObj({...studentObj, fatherName: e.target.value})} type="text" /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.class}  onChange={(e)=> setStudentObj({...studentObj, class: e.target.value})} type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput   value={DATAFROMTABLE.student.section} onChange={(e)=> setStudentObj({...studentObj, section: e.target.value})}  type='text' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.contact}  onChange={(e)=> setStudentObj({...studentObj, contact: e.target.value})}  type="text" /></Box>
                <Box sx={{padding:"10px"}}><SmInput   value={DATAFROMTABLE.student.cnic} onChange={(e)=> setStudentObj({...studentObj, cnic: e.target.value})}  type='text' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.email} onChange={(e)=> setStudentObj({...studentObj, email: e.target.value})}  type="email" /></Box>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.password} onChange={(e)=> setStudentObj({...studentObj, password: e.target.value})}  type='password' /></Box>    
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center"}}>
                <Box sx={{padding:"10px"}}><SmInput  value={DATAFROMTABLE.student.address} onChange={(e)=> setStudentObj({...studentObj, address: e.target.value})} type="text" /></Box>
                    
            </Box>


            <Box>
                <Box>
                    <SmButton onClick={()=>Save(DATAFROMTABLE.student.id)} label="Save" variant="contained" />
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


export default EditStudentData;