import React from "react";
import TextField from '@mui/material/TextField';
import { Placeholder } from "react-bootstrap";

function SmInput(props){
    const {label, variant, type,onChange,value,placeholder} = props;


    return(
        <>
        
        <TextField id="outlined-basic" type={type} defaultValue={value} onChange={onChange} label={label} variant={variant} placeholder={placeholder} />
        
        </>
    )
}


export default SmInput;