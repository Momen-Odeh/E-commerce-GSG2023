import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function DenseMenu() {

  return (


    
      <MenuList dense sx={{ width: 320 ,height:400 ,color:"black"}}>
        <MenuItem>
          <Button  endIcon={<ArrowForwardIosIcon/>} sx={{color:"black"}}>  الملابس النسائية </Button>
        </MenuItem> 
        <MenuItem>
          <Button  sx={{color:"black"}}> الملابس الرجالية    </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}> الآجهزه الآلكترونيه  </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}>     الآدوات المنزلية  </Button>
     

        </MenuItem>
        <MenuItem>
        <Button   sx={{color:"black"}}>  الآدوية </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}>   الآجهزه الرياضية</Button>
        </MenuItem>
        <MenuItem>
          <Button  inset  sx={{color:"black"}}>الطفل ومستلزماته   </Button>
        </MenuItem>
        <MenuItem>
          <Button inset endIcon={<ArrowForwardIosIcon/>} sx={{color:"black"}}> المواد الغذائية  </Button>
        </MenuItem>
        <MenuItem>
        <Button  inset  sx={{color:"black"}}>   الجمال والصحه </Button>
        </MenuItem>
      </MenuList>
  );
}
