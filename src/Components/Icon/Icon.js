import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function IconButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
    
      
      <IconButton variant="outlined" sx={{width:"60px"}}>
        <FavoriteBorder />
      </IconButton>
     
    </Box>
  );
}