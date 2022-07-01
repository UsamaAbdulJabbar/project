import React from "react";
import TextField from '@mui/material/TextField';

function SmInput(props){
    const {label, variant, type,onChange} = props;


    return(
        <>
        
        <TextField id="outlined-basic" type={type} onChange={onChange} label={label} variant={variant} />
        
        </>
    )
}


export default SmInput;