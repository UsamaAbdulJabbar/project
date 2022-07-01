import React from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';



function SmButton(props){
    const {variant,onClick,label,loading,disable,color} = props;
    return(
        <>
            <Button disable={disable || loading} variant={variant} onClick={onClick} color={color}>
                {loading && <CircularProgress color="inherit"/>}
                {label}
                </Button>
            
        </>
    )
}


export default SmButton;