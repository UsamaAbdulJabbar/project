import { Typography,Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/layouts/table";
import SmButton from "../../components/smButton";




function ViewStudentData(){
    const navigate = useNavigate();
      const AddNewData = ()=>{
        navigate("/addStudent")
    }

    return (
        <>
        <Typography variant="h1">
           View Student Data Page
        </Typography>
        <Box>
            <Box>
                <SmButton label="Add New Student" variant="contained" onClick={AddNewData} />
            </Box>
        </Box>

        <Box>
            <DataTable />
        </Box>
        
        </>
    )
}


export default ViewStudentData;