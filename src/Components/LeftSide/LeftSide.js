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
          <Button  endIcon={<ArrowForwardIosIcon/>} sx={{color:"black"}}>  Woman’s Fashion </Button>
        </MenuItem> 
        <MenuItem>
          <Button  sx={{color:"black"}}> Men’s Fashion    </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}> Electronics  </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}>     Home And Lifestyle  </Button>
     

        </MenuItem>
        <MenuItem>
        <Button   sx={{color:"black"}}>  Medicine </Button>
        </MenuItem>
        <MenuItem>
          <Button inset  sx={{color:"black"}}>   Sports  And Outdoor</Button>
        </MenuItem>
        <MenuItem>
          <Button  inset  sx={{color:"black"}}>Baby’s And Toys   </Button>
        </MenuItem>
        <MenuItem>
          <Button inset endIcon={<ArrowForwardIosIcon/>} sx={{color:"black"}}> Groceries And  Pets  </Button>
        </MenuItem>
        <MenuItem>
        <Button  inset  sx={{color:"black"}}>   Health And Beauty </Button>
        </MenuItem>
      </MenuList>
  );
}
