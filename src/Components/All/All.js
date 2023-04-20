import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{width:"170px",marginBottom:"30px" ,marginTop:"30px" ,height:"40px"}}>
        <Button sx={{width:"70px" , color:"black"}}>-</Button>
        <Button sx={{width:"150px",color:"black"}}>3</Button>
        <Button sx={{width:"70px", color:"white" ,backgroundColor:"#DB4444"}}>+</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button sx={{width:"180px" , color:"black" ,backgroundColor:"#DB4444" , height:"40px",marginBottom:"30px"}}>Buy Now</Button>
       
      </ButtonGroup>
      
    </Box>
  );
}