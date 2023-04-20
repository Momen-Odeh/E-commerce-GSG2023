import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 ,height:400 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>  Woman’s Fashion </ListItemText>
        </MenuItem> 
        <MenuItem>
          <ListItemText inset> Men’s Fashion    </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset> Electronics  </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            
          </ListItemIcon>  
          Home And Lifestyle

        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText  inset> Medicine  </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText  inset>   Sports  And Outdoor</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText  inset>Baby’s And Toys   </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText  inset> Groceries And  Pets  </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText  inset>  Health And Beauty </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}