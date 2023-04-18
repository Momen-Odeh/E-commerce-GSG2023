import { Box } from "@mui/material"; 
import { createTheme } from "@mui/material/styles"; 
import React from "react"; 
 
const Description = (props) => { 
  const { description } = props; 
  const theme = createTheme({ 
    DescriptionTheme: { 
      fontFamily: "Poppins", 
      fontWeight: "bold", 
      fontSize: "16px", 
      lineHight: "24px",
      textAlign: "left" 
    }, 
  }); 
  return ( 
    <> 
      <Box sx={theme.DescriptionTheme}>{description}</Box> 
    </> 
  ); 
}; 
 
export default Description;