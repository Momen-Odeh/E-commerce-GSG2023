import React from "react"; 
import Rating from "@mui/material/Rating"; 
import { Box, createTheme } from "@mui/material"; 
const Ratings = (props) => { 
  const { rating, stars } = props; 
 
  const theme = createTheme({ 
    OuterDiv: { display: "flex" }, 
    CountTheme: { 
      display: "flex", 
      alignItems: "center", 
      opacity: 0.5, 
      fontFamily: "Poppins", 
      fontWeight: 500, 
    }, 
  }); 
  return ( 
    //deleted rating.count because it was useless and didnt work, putting rating only works
    <Box sx={theme.OuterDiv}> 
      <Rating defaultValue={stars} precision={0.5} readOnly/>
      <Box sx={theme.CountTheme}>{`(${rating})`}</Box> 
    </Box> 
  ); 
}; 
 
export default Ratings;