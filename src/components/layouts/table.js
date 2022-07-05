import React, { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SmButton from '../smButton';
import { deleteData, getStudentData } from '../../config/firebase/firebaseMethods';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function DataTable() {
    const [getData, setGetData]  = useState([])
    const navigate  = useNavigate();
    const GetStudentData = ()=>{
        getStudentData('StudentData').then((res)=>{
            
            console.log(res)
            setGetData(res);
        })
    }

    useEffect(()=>{
        GetStudentData();
    },[])


    const DeleteData=(id)=>{
            deleteData("StudentData",id);
            getStudentData()
            window.location.reload();
            console.log(id)
    }
    
    //id card genereate
    const dispatch = useDispatch();
    const IdCardGen = (id)=>{
      getStudentData("StudentData",id).then((res)=>{
        console.log(res)
        dispatch(
          {
            type : "DATAFROMTABLE",
            payload : res,
          }
        )
        navigate("/idCardStudent");
       
      }).catch((err)=>{
        console.log(err);
      })
    }

    const EditScreen=(id)=>{
      getStudentData("StudentData",id).then((res)=>{
        console.log(res)
        
        navigate("/editScreen")
        dispatch(
          {
            type : "DATAFROMTABLE",
            payload : res,
          }
        )
             
      }).catch((err)=>{
        console.log(err);
      })
    }
    
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">STUDENT NAME</StyledTableCell>
            <StyledTableCell align="center">FATHER NAME</StyledTableCell>
            <StyledTableCell align="center">CLASS</StyledTableCell>
            <StyledTableCell align="center">SECTION</StyledTableCell>
            <StyledTableCell align="center">CONTACT</StyledTableCell>
            <StyledTableCell align="center">CNIC</StyledTableCell>
            <StyledTableCell align="center">ADDRESS</StyledTableCell>
            <StyledTableCell align="center">EDIT/DELETE</StyledTableCell>
            <StyledTableCell align="center">ID CARD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getData.map((e) => (
            <StyledTableRow >
              
              <StyledTableCell align="center"><Typography variant='h5'>{e.name}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant='h5'>{e.fatherName}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant='h5'>{e.class}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant='h5'>{e.section}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant="h5">{e.contact}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant='h5'>{e.cnic}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Typography variant='h5'>{e.address}</Typography></StyledTableCell>
              <StyledTableCell align="center">
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Box sx={{padding:"5px"}}><SmButton onClick={()=>EditScreen(e.id)}  label="Edit" variant="contained" /></Box>
                    <Box sx={{padding:"5px"}}><SmButton onClick={() => DeleteData(e.id)} label="Delete" variant='contained' color='error'/></Box>
                </Box>
                
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Box sx={{padding:"5px"}}><SmButton onClick={() =>IdCardGen(e.id)} label="Generate ID card" variant="contained" /></Box>
                               </Box>
                
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

{/* <SmButton label="getData" variant="contained" onClick={GetStudentData} /> */}
    </>
  );
}
