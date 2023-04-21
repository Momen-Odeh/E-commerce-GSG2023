import * as React from 'react';
import Box from '@mui/joy/Box';

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Icon from '../Icon/Icon'
import './PartTwo.css'
// import Ser from '../Ser/Ser'
import ColorButtons from "../SharedComponents/Button/index.jsx";

import PlusMinus from '../SharedComponents/PlusMinus/index.jsx'

export default function ExampleProductAttributes() {
  return (
    <div>
   
{/*  **************************************************************************  */}
<Box sx={{ display: "flex", margin: "20px" }}>
            <Box>Colors :</Box>
            <Box
              sx={{
                margin: "0 5px",
                width: "20px",
                height: "20px",
                background: "#A0BCE0",
                borderRadius: "50%",
              }}
            ></Box>
            <Box
              sx={{
                margin: "0 5px",
                width: "20px",
                height: "20px",
                background: "#E07575",
                borderRadius: "50%",
              }}
            ></Box>
          </Box>

<Box sx={{ display: "flex", margin: "30px 0" }}>
            <Box>Size :</Box>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
                "&:hover": {
                  width: "32px",
                  height: "32px",
                  margin: "0 10px",
                  border: "1px solid #222",
                  color: "white",
                  backgroundColor: "#DB4444",
                },
              }}
            >
              XS
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              S
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                backgroundColor: "#DB4444",
                border: "1px solid #222",
              }}
            >
              ML
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              L
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                margin: "0 10px",
                border: "1px solid #222",
              }}
            >
              XL
            </button>
          </Box>
{/* **************************************8 */}
<Box sx={{ display: "flex", margin: "0 -5px" }}>
            <Box sx={{ margin: "0 5px" }}>
              <PlusMinus />
            </Box>
            <Box sx={{ margin: "0 6px" }} >
              <ColorButtons innerText={"Buy"}  type={"red"}/>
            </Box>
            <Box
              sx={{
                width: 34,
                height: 30,
                borderRadius: 0,
                border: "0.1px solid #000000",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2px 5px",
              }}
            >
              <Icon icon={<FavoriteBorderIcon />} />
            </Box>
          </Box>


{/* ******************************************************************** */}

<Box sx={{ margin: "50px 0" }}>
            <Box
              sx={{
                margin: "5px 5px 5px 10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box marginRight={3}>
                <Icon icon={<AirportShuttleIcon />}  />
              </Box>
              <Box>
                <Box>Free Delivery</Box>
                <Box>Enter your postal code for Delivery Availability</Box>
              </Box>
            </Box>
            
            <Box sx={{ display: "flex", justifyContent: "space-evenly" ,marginTop:"25px"}}>
              <Box marginRight={4}>
                <Icon icon={<LoopIcon />} />
              </Box>
              <Box >
                <Box>Return Delivery</Box>
                <Box>Free 30 Days Delivery Returns. Details</Box>
              </Box>
            </Box>
          </Box>  




          
   
    </div>
  );
}